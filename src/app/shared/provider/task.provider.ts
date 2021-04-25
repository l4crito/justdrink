import { ApplicationRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { PlayerModel } from 'src/app/models/player.model';
import { TaskModel } from 'src/app/models/task.model';
import { highlight } from 'src/app/utils/highlight.util';

@Injectable({
  providedIn: 'root'
})
export class TaskProvider {

  tasks: TaskModel[] = [
    {
      id: 0,
      task: 'Toma la persona que tu elijas :3'
    },
    {
      id: 1,
      task: 'Toma por shunsh@'
    },
    {
      id: 2,
      task: 'Escoje una persona y ponle un reto'
    },
    {
      id: 3,
      task: 'Baila un pe perreito! al menos 30 secs'
    },
    {
      id: 4,
      task: 'Da 5 vueltas sobre ti mismo y despues toma!'
    },
    {
      id: 5,
      task: 'Toma por fe@'
    },
  ];
  assignedTasks: TaskModel[] = [];
  currentTask: TaskModel | undefined | null;
  constructor() { }

  assignTask(): any {
    if (this.assignedTasks.length >= this.tasks.length) {
      this.assignedTasks = [];
    }
    const unasignedTasks = this.tasks.filter(task => !this.assignedTasks.find(at => task.id === at.id));
    const index = Math.floor(Math.random() * unasignedTasks.length);
    const task = unasignedTasks[index];
    this.assignedTasks.push(task);
    return task;
  }
  removeAsignedTask(task: TaskModel | undefined | null) {
    this.assignedTasks = this.assignedTasks.filter(t => t.id !== task?.id);
  }
  addTask(task: TaskModel) {
    const taskPresent = this.tasks.find(taskInArray => taskInArray.id === task.id ||
      task.task?.toLocaleLowerCase() === taskInArray.task?.toLocaleLowerCase());
    if (taskPresent) {
      highlight(taskPresent);
    } else {
      this.tasks.unshift(task);
    }
  }

  removeTask(task: TaskModel) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

}
