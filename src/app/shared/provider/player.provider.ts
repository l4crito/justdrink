import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { PlayerModel, PlayerPosition } from 'src/app/models/player.model';
import { TaskModel, TaskType } from 'src/app/models/task.model';
import { highlight } from 'src/app/utils/highlight.util';
import { TaskProvider } from './task.provider';
import { debounceTime } from 'rxjs/operators';
import { getItem, Names, setItem } from 'src/app/utils/store.util';

@Injectable({
  providedIn: 'root'
})
export class PlayerProvider {
  resume = false;
  canResume = false;
  players: PlayerModel[] = [];
  current = -1;
  currentPlayer!: PlayerModel | null;
  nextTimer: any = null;
  playerTasks: { player: PlayerModel, task?: TaskModel }[] = [];

  nextPlayerSubject = new Subject<boolean>();
  nextPlayerSubscription?: Subscription;
  types = {
    normal: { type: TaskType.NORMAL, status: true },
    hot: { type: TaskType.HOT, status: false },
  };
  firstPlayer = 0;
  assigningPlayer = false;

  colors = ['#ff4c4c', '#34bf49', "#7d3f98", "#8e43e7", "#3be8b0", "#d2ea32", "#2b80ff", "#f37023"];
  banColors = ['#ff4c4c', '#34bf49', "#7d3f98", "#8e43e7", "#3be8b0", "#d2ea32", "#2b80ff", "#f37023"];
  partner: PlayerModel | null | undefined = null;
  banned: PlayerModel | null | undefined = null;
  constructor(public taskProvider: TaskProvider) {
    if (taskProvider.getTimeDifference(Names.LAST_START) < taskProvider.day) {
      let round = getItem(Names.ROUND);
      round = round ? Number(round) : 0;
      if (round) {
        this.taskProvider.round = round;
        this.players = getItem(Names.PLAYERS);
        this.taskProvider.currentTask = getItem(Names.CURRENT_TASK);
        this.taskProvider.assignedTasks = getItem(Names.ASSIGNED_TASKS);
        this.currentPlayer = getItem(Names.CURRENT_PLAYER);
        const partner = getItem(Names.PARTNER);
        const ban = getItem(Names.BAN);
        const colors = getItem(Names.COLORS);
        const banColors = getItem(Names.BAN_COLORS);
        if (colors) {
          this.colors = colors;
        }
        if (banColors) {
          this.banColors = banColors;
        }
        if (partner) {
          this.partner = this.players.find(pa => pa.name === partner.name);
        }
        if (ban) {
          this.banned = this.players.find(pa => pa.name === ban.name);
        }
        this.current = this.playerIndex(this.currentPlayer);
        this.resume = true;
        this.toogleGender();
      }
    }


    this.nextPlayerSubscription = this.nextPlayerSubject.pipe(
      debounceTime(200)
    ).subscribe(() => {
      this.findNextPlayer();
    })
  }

  addPlayer(player: PlayerModel) {
    player.name = player.name?.trim().toUpperCase();
    player.female = false;
    const playerPresent = this.players.find(pla => pla.name === player.name);
    if (playerPresent) {
      highlight(playerPresent);
    } else {
      this.players.splice((this.current + 1), 0, player);
      this.storePlayers();
      this.toogleGender();
    }
  }
  removePlayer(player: PlayerModel, evt: any) {
    evt?.preventDefault();
    evt?.stopImmediatePropagation();
    this.removePartner(player.color);
    this.players = this.players.filter(pla => pla.name !== player.name);
    this.playerTasks = this.playerTasks.filter(playerTask => playerTask.player.name !== player.name);
    this.deletePlayerTasks(player);
    this.storePlayers();
    if (player.name === this.currentPlayer?.name) {
      const lastPlayer = this.lastPlayer();
      if (lastPlayer) {
        this.current = this.playerIndex(lastPlayer);
        this.currentPlayer = lastPlayer;
      }
    }
  }


  assignPartner(current?: PlayerModel, evt?: any) {
    evt?.preventDefault();
    evt?.stopImmediatePropagation();
    if (!current) {
      return;
    }
    if (current.color && !this.partner || this.partner?.name === current.name) {
      this.removePartner(current.color);
      this.partner = null;
      return;
    }

    if (this.partner) {
      if (current?.color) {
        this.removePartner(current.color);
      }
      current.color = this.partner.color;
      this.partner.assigningPartner = false;
      this.partner = null;
    } else {
      this.partner = current;
      const color = this.colors.pop();
      this.partner.color = color;
      this.partner.assigningPartner = true;
    }
    this.storePlayers();
  }
  removePartner(color: string) {
    this.colors.push(color);
    this.colors = [...new Set(this.colors)];

    this.players.filter(play => play?.color === color).forEach(p => {
      p.color = null;
      p.assigningPartner = false;
    });
    this.storePlayers();
  }
  assignBan(current?: PlayerModel, evt?: any) {
    evt?.preventDefault();
    evt?.stopImmediatePropagation();
    if (!current) {
      return;
    }
    if (current.banColor && !this.banned || this.banned?.name === current.name) {
      this.removeBan(current.banColor);
      this.banned = null;
      return;
    }

    if (this.banned) {
      if (current?.banColor) {
        this.removeBan(current.banColor);
      }
      current.banColor = this.banned.banColor;
      this.banned.assigningBan = false;
      this.banned = null;
    } else {
      this.banned = current;
      const color = this.banColors.pop();
      this.banned.banColor = color;
      this.banned.assigningBan = true;
    }
    this.storePlayers();
  }
  removeBan(color: string) {
    this.banColors.push(color);
    this.banColors = [...new Set(this.banColors)];
    this.players.filter(play => play?.banColor === color).forEach(p => {
      p.banColor = null;
      p.assigningBan = false;
    });
    this.storePlayers();
  }

  playerIndex(player: PlayerModel | null | undefined) {
    return player ? this.players.findIndex(playr => playr.name === player?.name) : -1;
  }

  start() {
    localStorage.setItem(Names.LAST_START, new Date().toString());
    this.players.forEach(player => player.position = PlayerPosition.LEFT);
    this.taskProvider.assignedTasks = [];
    this.currentPlayer = null;
    this.taskProvider.currentTask = null;
    const index = Math.floor(Math.random() * (this.players.length - 1));
    this.firstPlayer = (index + 1);
    this.current = index;
    this.currentPlayer = this.players[index];
    this.taskProvider.round = 0;
    this.nextPlayer(null);
  }

  nextPlayer(evt?: any) {
    evt?.preventDefault();
    evt?.stopImmediatePropagation();
    this.nextPlayerSubject.next(true);

  }


  findNextPlayer() {
    if (this.assigningPlayer) {
      return;
    }
    this.assigningPlayer = true;
    this.taskProvider.currentTask = null;
    if (this.currentPlayer) {
      this.currentPlayer.position = PlayerPosition.RIGHT;
    }
    setTimeout(() => {
      if (this.currentPlayer) {
        this.currentPlayer.position = PlayerPosition.LEFT;
      }
      this.current++;
      if (this.current + 1 > this.players.length) {
        this.current = 0;
      }
      if (this.current === this.firstPlayer) {
        this.taskProvider.round++;
      }
      this.currentPlayer = this.players[this.current];
      setTimeout(() => {
        if (this.currentPlayer) {
          this.currentPlayer.position = PlayerPosition.MIDDLE;
          setItem(Names.CURRENT_PLAYER, this.currentPlayer);
          this.playerTasks.push({ player: this.currentPlayer });
          setTimeout(() => {
            this.assigningPlayer = false;
            const task: TaskModel = this.taskProvider.assignTask();
            this.verifyTask(task);
            setItem(Names.CURRENT_TASK, task);
            const lastTask = this.lastAssignedTask();
            this.taskProvider.currentTask = task;
            if (this.taskProvider.history) {
              const historyItem = { task: task, player: this.currentPlayer, round: this.taskProvider.round };
              this.taskProvider.history.unshift(historyItem);
              localStorage.setItem(Names.HISTORY, JSON.stringify(this.taskProvider.history));
            }
            if (lastTask) {
              lastTask.task = task;
            }
          }, 500);
        }

      }, 280);
    }, 280);
  }

  clearHistory() {
    this.taskProvider.history = [];
    localStorage.setItem(Names.HISTORY, JSON.stringify(this.taskProvider.history));
  }
  finsh() {
    this.clearHistory();
    this.taskProvider.assignedTasks = [];
    this.playerTasks = [];
  }
  verifyIfCanResume() {
    if (this.players.length < 2) {
      this.taskProvider.round = 0;
    }
    this.canResume = this.taskProvider.round > 0 ? true : false;
  }
  lastPlayer() {
    return this.lastAssignedTask()?.player;
  }
  lastAssignedTask() {
    return this.playerTasks[this.playerTasks.length - 1];
  }

  deletePlayerTasks(player: PlayerModel) {
    this.playerTasks = this.playerTasks.filter(playerTask => playerTask.player.name !== player.name);
    this.verifyIfCanResume();
  }

  verifyTask(task: TaskModel) {

    if (task.task?.includes('(o)')) {
      task.taskToPlay = JSON.parse(JSON.stringify(task.task?.replace('(o)', this.getOtherPlayer(task.type)?.name || '')));
    } else
      if (task.task?.includes('(a)')) {
        task.taskToPlay = JSON.parse(JSON.stringify(task.task?.replace('(a)', this.getRandomPlayer(task.type)?.name || '')))
      } else {
        task.taskToPlay = task.task;
      }

  }

  getOtherPlayer(taskType?: 'n'|'s') {

    if (taskType === TaskType.HOT && this.currentPlayer?.color) {
      return this.players.filter(player => player.color === this.currentPlayer?.color)
        .find(player => player.name !== this.currentPlayer?.name);
    }
    let otherPlayers = [];
    otherPlayers = this.players
      .filter(player => player.female !== this.currentPlayer?.female)
      .filter(player => player.name !== this.currentPlayer?.name)

    if (this.currentPlayer?.banColor) {
      otherPlayers = otherPlayers.filter(player => player.banColor !== this.currentPlayer?.banColor);
    }
    if (taskType === TaskType.HOT) {
      otherPlayers = otherPlayers.filter(player => !player.color);
    }
    return otherPlayers.length ? otherPlayers[Math.floor(Math.random() * otherPlayers.length)] : this.getRandomPlayer();
  }
  getRandomPlayer(taskType?: 'n'|'s') {
    if (taskType === TaskType.HOT && this.currentPlayer?.color) {
      return this.players.filter(player => player.color === this.currentPlayer?.color)
        .find(player => player.name !== this.currentPlayer?.name);
    }
    let anyPlayer = this.players.filter(player => player.name !== this.currentPlayer?.name)

    if (this.currentPlayer?.banColor) {
      anyPlayer = anyPlayer.filter(player => player.banColor !== this.currentPlayer?.banColor);
    }
    return anyPlayer.length ? anyPlayer[Math.floor(Math.random() * anyPlayer.length)] : null;
  }

  toogleGender(player?: PlayerModel, ev?: any) {

    if (player) {
      player.female = !player.female;
    }
    const female = this.players.filter(player => player.female).length;
    const male = this.players.length - female;
    const others = female > 0 && male > 0;
    if (others !== this.taskProvider.others) {
      this.taskProvider.others = others;
      this.taskProvider.filterTasks();
    }
    this.storePlayers();
  }
  storePlayers() {
    setItem(Names.PLAYERS, this.players);
    setItem(Names.PARTNER, this.partner);
    setItem(Names.BAN, this.banned);
    setItem(Names.COLORS, this.colors);
    setItem(Names.BAN_COLORS, this.banColors);
  }
  storeCurrentPlayer() {
    setItem(Names.CURRENT_PLAYER, this.currentPlayer);
  }

}
