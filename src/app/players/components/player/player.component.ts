import { Component, Input, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/models/player.model';
import { PlayerProvider } from 'src/app/shared/provider/player.provider';
import { leftToRigthAnimation } from '../../../animations';

@Component({
  animations: [leftToRigthAnimation],
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player!: PlayerModel;
  @Input() showDelete = false;
  constructor(public playerProvider: PlayerProvider) { }

  ngOnInit(): void {
  }

}
