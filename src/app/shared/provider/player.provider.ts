import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PlayerModel, PlayerPosition } from 'src/app/models/player.model';
import { TaskModel } from 'src/app/models/task.model';
import { highlight } from 'src/app/utils/highlight.util';
import { TaskProvider } from './task.provider';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerProvider {
  resume = false;
  players: PlayerModel[] = [
    { name: 'CARITO', position: PlayerPosition.LEFT },
    { name: 'ISABRU', position: PlayerPosition.LEFT },
    { name: 'LUCERO', position: PlayerPosition.LEFT },
    { name: 'CHRISTIAN', position: PlayerPosition.LEFT },
    { name: 'DIEGO', position: PlayerPosition.LEFT },
    { name: 'DIANA', position: PlayerPosition.LEFT },
  ];
  current = 0;
  currentPlayer!: PlayerModel | null;
  nextTimer: any = null;
  playerTasks: { player: PlayerModel, task?: TaskModel }[] = [];

  nextPlayerSubject = new Subject<boolean>();
  prevPlayerSubject = new Subject<boolean>();
  prevPlayerSubscription?: Subscription;
  nextPlayerSubscription?: Subscription;
  constructor(private taskProvider: TaskProvider) {
    this.nextPlayerSubscription = this.nextPlayerSubject.pipe(
      debounceTime(200)
    ).subscribe(() => {
      this.findNextPlayer();
    })
    this.prevPlayerSubscription = this.prevPlayerSubject.pipe(
      debounceTime(200)
    ).subscribe(() => {
      this.findPrevPlayer();
    })
  }

  addPlayer(player: PlayerModel) {
    const playerPresent = this.players.find(pla => pla.name === player.name);
    if (playerPresent) {
      highlight(playerPresent);
    } else {
      this.players.unshift(player);
    }
  }
  removePlayer(player: PlayerModel) {
    this.players = this.players.filter(pla => pla.name !== player.name);
    this.playerTasks = this.playerTasks.filter(playerTask => playerTask.player.name !== player.name);
    if (player.name === this.currentPlayer?.name) {
      const lastPlayer = this.lastPlayer();
      if (lastPlayer) {
        this.current = this.playerIndex(lastPlayer);
        this.currentPlayer = lastPlayer;
      }
    }
  }
  playerIndex(player: PlayerModel) {
    return this.players.findIndex(playr => playr.name === player?.name);
  }

  start() {
    this.currentPlayer = null;
    this.taskProvider.currentTask = null;
    const index = Math.floor(Math.random() * this.players.length);
    this.currentPlayer = this.players[index];
    this.nextPlayer();
  }

  nextPlayer() {
    this.nextPlayerSubject.next(true);

  }

  prevPlayer() {
    this.prevPlayerSubject.next(true);
  }
  findNextPlayer() {
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
      this.currentPlayer = this.players[this.current];
      setTimeout(() => {
        if (this.currentPlayer) {
          this.currentPlayer.position = PlayerPosition.MIDDLE;
          this.playerTasks.push({ player: this.currentPlayer });
          setTimeout(() => {
            const task = this.taskProvider.assignTask();
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
  findPrevPlayer() {
    if (this.playerTasks.length > 1) {
      const popedTask = this.playerTasks.pop();
      this.taskProvider.removeAsignedTask(popedTask?.task);
    } else {
      highlight(this.playerTasks[0]?.player)
      return;
    }
    const lastTask = this.lastAssignedTask();
    if (lastTask) {
      this.taskProvider.currentTask = null;
      if (this.currentPlayer) {
        this.currentPlayer.position = PlayerPosition.LEFT;
      }
      setTimeout(() => {
        lastTask.player.position = PlayerPosition.RIGHT;
        this.currentPlayer = lastTask.player;
        setTimeout(() => {
          lastTask.player.position = PlayerPosition.MIDDLE;
          this.current = this.playerIndex(lastTask.player);
          setTimeout(() => {
            this.taskProvider.currentTask = lastTask.task;
          }, 500);
        }, 280);
      }, 280);

    }
  }


  finsh() {
    this.taskProvider.assignedTasks = [];
    this.playerTasks = [];
  }
  verifyIfCanResume(): boolean {
    return this.playerTasks.length > 0 ? true : false;
  }
  lastPlayer() {
    return this.lastAssignedTask()?.player;
  }
  lastAssignedTask() {
    return this.playerTasks[this.playerTasks.length - 1];
  }
}
