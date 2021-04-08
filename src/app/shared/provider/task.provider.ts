import { ApplicationRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { PlayerModel } from 'src/app/models/player.model';
import { TaskModel } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskProvider {

  tasks: TaskModel[] = [
    {
      id: 0,
      task: '0'
    },
    {
      id: 1,
      task: '1'
    },
    {
      id: 2,
      task: '2'
    },
    {
      id: 3,
      task: '3'
    },
  ];
  assignedTasks: TaskModel[] = [];
  constructor() { }

  assignTask(): any {
    if (this.assignedTasks.length === this.tasks.length) {
      this.assignedTasks = [];
    }
    const index = Math.floor(Math.random() * this.tasks.length);
    const task = this.tasks[index];
    const asignedTask = this.assignedTasks.find(t => task.id === t.id);
    if (asignedTask) {
      return this.assignTask();
    }
    this.assignedTasks.push(task);
    return task;
  }
  removeAsignedTask(taskId: number | null | undefined) {
    this.assignedTasks = this.assignedTasks.filter(t => t.id !== taskId);
  }

}
