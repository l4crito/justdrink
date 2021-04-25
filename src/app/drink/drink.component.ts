import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayerProvider } from '../shared/provider/player.provider';
import { apearAnimation, nameAnimation, playerAnimation, zoomIn, rotateLeft, inOutAnimation } from '../animations';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { Router } from '@angular/router';
import { TaskProvider } from '../shared/provider/task.provider';
@Component({
  animations: [nameAnimation, playerAnimation, apearAnimation, zoomIn, rotateLeft, inOutAnimation],
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit, OnDestroy {

  constructor(
    public playerProvider: PlayerProvider,
    public taskProvider: TaskProvider,
    private hotkeyService: HotkeysService,
    private router: Router
  ) {
    if (!this.playerProvider.resume || this.playerProvider.current < 0) {
      this.playerProvider.finsh();
      this.playerProvider.start();
    }
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
  ngOnDestroy(): void {
    this.hotkeyService.remove(new Hotkey(['enter', 'right'], (event: KeyboardEvent): boolean => {
      this.playerProvider.nextPlayer();
      return false;
    }));
    this.hotkeyService.remove(new Hotkey(['left'], (event: KeyboardEvent): boolean => {
      this.playerProvider.prevPlayer();
      return false;
    }));
    this.hotkeyService.remove(new Hotkey(['backspace'], (event: KeyboardEvent): boolean => {
      this.back()
      return false;
    }));
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['']);
  }

}
