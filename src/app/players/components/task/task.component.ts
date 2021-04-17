import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { leftToRigthAnimation } from 'src/app/animations';
import { TaskModel } from 'src/app/models/task.model';
import { TaskProvider } from 'src/app/shared/provider/task.provider';

@Component({
  animations: [leftToRigthAnimation],
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  @ViewChild('txtTask') txtPlayer: ElementRef | any;

  form: FormGroup;
  constructor(
    public taskProvider: TaskProvider,
    formBuilder: FormBuilder,
    private hotkeyService: HotkeysService,
    private _bottomSheetRef: MatBottomSheetRef<TaskComponent>,
  ) {
    this.form = formBuilder.group({
      task: ['', [Validators.required]],
    });
    this.hotkeyService.add(new Hotkey(['right'], (event: KeyboardEvent): boolean => {
      this.addTask();
      return false;
    }, ['input', 'textarea']));
  }
  ngOnDestroy(): void {
    this.hotkeyService.remove(new Hotkey(['right'], (event: KeyboardEvent): boolean => {
      this.addTask();
      return false;
    }, ['input', 'textarea']));
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.txtPlayer.nativeElement.focus();
    }, 300);
  }
  addTask() {
    if (this.form.invalid) {
      return;
    }
    const task: TaskModel = this.form.value;
    task.id = this.getUniqueId(3);
    this.taskProvider.addTask(task);
    this.form.controls.task.setValue('');
  }

  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
