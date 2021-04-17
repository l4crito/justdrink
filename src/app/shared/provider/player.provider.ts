import { ApplicationRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerModel, PlayerPosition } from 'src/app/models/player.model';
import { highlight } from 'src/app/utils/highlight.util';
import { TaskProvider } from './task.provider';

@Injectable({
  providedIn: 'root'
})
export class PlayerProvider {

  players: PlayerModel[] = [
    { name: 'HERRERA', position: PlayerPosition.LEFT },
    { name: 'LUCERO', position: PlayerPosition.LEFT },
    { name: 'CAICEDO', position: PlayerPosition.LEFT },
    { name: 'RODRIGO ESPIN', position: PlayerPosition.LEFT },
    { name: 'DIANA VALLEJO', position: PlayerPosition.LEFT },
  ];
  current = 0;
  currentPlayer!: PlayerModel | null;
  nextTimer: any = null;
  assigningTask = false;
  constructor(private taskProvider: TaskProvider) { }

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
  }
  nextPlayer() {
    if (this.assigningTask) {
      return;
    }
    this.currentPlayer = null;
    this.current++;
    if (this.current + 1 > this.players.length) {
      this.current = 0;
    }
    this.assigningTask = true;
    this.nextTimer = setTimeout(() => {
      this.currentPlayer = this.players[this.current];
      this.currentPlayer.task = null;
      setTimeout(() => {
        if (this.currentPlayer) {
          this.currentPlayer.task = this.taskProvider.assignTask();
          this.assigningTask = false;
        }
      }, 500);
    }, 350);
  }

  start() {
    const index = Math.floor(Math.random() * this.players.length);
    this.currentPlayer = this.players[index];
    this.nextPlayer();
  }



  prevPlayer() {
    const index = this.current === 0 ? (this.players.length - 1) : (this.current - 1);
    const alreadyPlayed = this.players[index];
    if (alreadyPlayed?.task) {
      this.current = index;
      this.taskProvider.removeAsignedTask(this.currentPlayer?.task);
      this.currentPlayer = null;
      const task = alreadyPlayed.task;
      alreadyPlayed.task = null;
      setTimeout(() => {
        this.currentPlayer = alreadyPlayed;
        this.currentPlayer.task = null;
        setTimeout(() => {
          if (this.currentPlayer) {
            this.currentPlayer.task = task;
          }
        }, 500);
      }, 350);
    }
  }

  finsh() {
    this.taskProvider.assignedTasks = [];
    this.players.forEach(player => player.task = null);
  }

}
