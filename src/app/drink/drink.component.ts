import { Component, OnInit } from '@angular/core';
import { PlayerProvider } from '../shared/provider/player.provider';
import { apearAnimation, nameAnimation, playerAnimation, zoomIn, rotateLeft } from '../animations';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  animations: [nameAnimation, playerAnimation, apearAnimation, zoomIn, rotateLeft],
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  constructor(
    public playerProvider: PlayerProvider,
    private hotkeyService: HotkeysService,
    private router: Router
  ) {
    this.playerProvider.start();
    this.hotkeyService.add(new Hotkey(['enter', 'right'], (event: KeyboardEvent): boolean => {
      this.playerProvider.nextPlayer();
      return false;
    }));
    this.hotkeyService.add(new Hotkey(['left'], (event: KeyboardEvent): boolean => {
      this.playerProvider.prevPlayer();
      return false;
    }));
    this.hotkeyService.add(new Hotkey(['backspace'], (event: KeyboardEvent): boolean => {
      this.back()
      return false;
    }));
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['']);
    this.playerProvider.finsh();
  }

}
