import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { apearAnimation, bottomToTopAnimation, leftToRight, rightToLeft, zoomIn, zoomSlow, leftRightNumeric } from '../animations';
import { PlayerModel, PlayerPosition } from '../models/player.model';
import { TaskType } from '../models/task.model';
import { PlayerProvider } from '../shared/provider/player.provider';
import { TaskProvider } from '../shared/provider/task.provider';
import { TaskComponent } from './components/task/task.component';

@Component({
  animations: [apearAnimation, bottomToTopAnimation, leftToRight, zoomIn, rightToLeft, zoomSlow, leftRightNumeric],
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  @ViewChild('txtPlayer') txtPlayer: ElementRef | any;
  constructor(
    public playerProvider: PlayerProvider,
    public taskProvider: TaskProvider,
    private router: Router,
    private hotkeyService: HotkeysService,
    private matBottomSheet: MatBottomSheet,
    formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
    });
    this.addHotKeys();

    if (window.innerWidth > 800) {
      setTimeout(() => {
        this.focusAddPlayer();
      }, 300);
    }


  }
  addHotKeys() {
    this.hotkeyService.add(new Hotkey(['esc'], (event: KeyboardEvent): boolean => {
      this.focusAddPlayer();
      return false;
    }));
    this.hotkeyService.add(new Hotkey(['ctrl+down'], (event: KeyboardEvent): boolean => {
      this.taskProvider.getTasks();
      return false;
    }, ['input']));
    this.hotkeyService.add(new Hotkey(['right'], (event: KeyboardEvent): boolean => {
      this.resume();
      return false;
    }, ['input']));
  }
  ngOnDestroy(): void {
    this.hotkeyService.remove(new Hotkey(['right'], (event: KeyboardEvent): boolean => {
      this.resume();
      return false;
    }, ['input']));
    this.hotkeyService.remove(new Hotkey(['down'], (event: KeyboardEvent): boolean => {
      this.taskProvider.getTasks();
      return false;
    }, ['input']));
  }

  ngOnInit(): void {
    this.playerProvider.verifyIfCanResume();
  }

  addPlayer() {
    const player: PlayerModel = this.form.value;
    player.name = player.name?.toUpperCase();
    player.position = PlayerPosition.LEFT;
    this.playerProvider.addPlayer(player);
    this.form.controls.name.setValue('');
  }
  start() {
    this.play();
  }
  resume() {
    this.play(this.playerProvider.canResume);
  }

  play(resume = false) {
    if (this.playerProvider.players.length < 2 || !this.taskProvider.tasks.length) {
      return;
    }
    this.playerProvider.resume = resume;
    this.router.navigate(['/tomar']);
  }

  focusAddPlayer() {
    this.txtPlayer.nativeElement.focus();
  }



  addTask() {
    const bottomSheetRef = this.matBottomSheet.open(TaskComponent);
    bottomSheetRef.afterDismissed().subscribe((edited: boolean) => {
      this.addHotKeys();
      if (edited) {
        this.playerProvider.canResume = false;
      }
    });
  }

  toogeType(typeObj: { type: TaskType, status: boolean }) {
    if (typeObj.status) {
      this.taskProvider.removeType(typeObj.type);
    } else {
      this.taskProvider.addType(typeObj.type);
    }
    typeObj.status = !typeObj.status;
  }



}
