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
  constructor(public taskProvider: TaskProvider) {

    let round = getItem(Names.ROUND);
    round = round ? Number(round) : 0;
    if (round) {
      this.taskProvider.round = round;
      this.players = getItem(Names.PLAYERS);
      this.taskProvider.currentTask = getItem(Names.CURRENT_TASK);
      this.taskProvider.assignedTasks = getItem(Names.ASSIGNED_TASKS);
      this.currentPlayer = getItem(Names.CURRENT_PLAYER);
      this.current = this.playerIndex(this.currentPlayer);
      this.resume = true;
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
  playerIndex(player: PlayerModel | null | undefined) {
    return player ? this.players.findIndex(playr => playr.name === player?.name) : -1;
  }

  start() {
    this.players.forEach(player => player.position = PlayerPosition.LEFT);
    this.currentPlayer = null;
    this.taskProvider.currentTask = null;
    const index = Math.floor(Math.random() * (this.players.length - 1));
    this.firstPlayer = (index + 1);
    this.current = index;
    this.currentPlayer = this.players[index];
    this.taskProvider.round = 0;
    this.nextPlayer(null);
  }

  nextPlayer(evt: any) {
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
            if (lastTask) {
              lastTask.task = task;
            }
          }, 500);
        }

      }, 280);
    }, 280);
  }



  finsh() {
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
      task.taskToPlay = JSON.parse(JSON.stringify(task.task?.replace('(o)', this.getOtherPlayer()?.name || '')));
    } else
      if (task.task?.includes('(a)')) {
        task.taskToPlay = JSON.parse(JSON.stringify(task.task?.replace('(a)', this.getRandomPlayer()?.name || '')))
      } else {
        task.taskToPlay = task.task;
      }

  }

  getOtherPlayer() {
    const otherPlayers = this.players
      .filter(player => player.female !== this.currentPlayer?.female)
      .filter(player => player.name !== this.currentPlayer?.name)
    return otherPlayers.length ? otherPlayers[Math.floor(Math.random() * otherPlayers.length)] : null;
  }
  getRandomPlayer() {
    const anyPlayer = this.players.filter(player => player.name !== this.currentPlayer?.name)
    return anyPlayer.length ? anyPlayer[Math.floor(Math.random() * anyPlayer.length)] : null;
  }

  toogleGender(player?: PlayerModel) {
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
  }
  storeCurrentPlayer() {
    setItem(Names.CURRENT_PLAYER, this.currentPlayer);
  }

}
