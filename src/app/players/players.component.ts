import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apearAnimation, bottomToTopAnimation, leftToRigthAnimation, zoomIn } from '../animations';
import { PlayerModel, PlayerPosition } from '../models/player.model';
import { PlayerProvider } from '../shared/provider/player.provider';

@Component({
  animations: [apearAnimation, bottomToTopAnimation, leftToRigthAnimation, zoomIn],
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public playerProvider: PlayerProvider,
    private router: Router,
    formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  addPlayer() {
    const player: PlayerModel = this.form.value;
    player.name = player.name?.toUpperCase();
    player.position = PlayerPosition.LEFT;
    this.playerProvider.addPlayer(player);
    this.form.controls.name.setValue('');
  }
  play() {
    this.router.navigate(['/tomar']);
  }
}
