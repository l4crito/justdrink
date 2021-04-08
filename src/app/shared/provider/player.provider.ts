import { ApplicationRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { PlayerModel } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerProvider {

  players: PlayerModel[] = [];
  current = 0;
  currentPlayer!: PlayerModel;
  constructor() { }

  addPlayer(player: PlayerModel) {
    const playerPresent = this.players.find(pla => pla.name === player.name);
    if (playerPresent) {
      this.highLightPlayer(playerPresent);
    } else {
      this.players.unshift(player);
    }
  }
  removePlayer(player: PlayerModel) {
    this.players = this.players.filter(pla => pla.name !== player.name);
  }
  getNextPlayer() {
    this.current++;
    if (this.current + 1 > this.players.length) {
      this.current = 0;
    }
    this.currentPlayer = this.players[this.current];
  }

  start() {
    this.current = 0;
    this.currentPlayer = this.players[0];
  }

  highLightPlayer(player: PlayerModel) {
    player.highlight = true;
    setTimeout(() => {
      player.highlight = false;
    }, 400);
  }

}
