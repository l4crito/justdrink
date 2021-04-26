import { Injectable } from '@angular/core';
import { tasks } from 'src/app/mocks/tasks';
import { TaskModel } from 'src/app/models/task.model';
import { highlight } from 'src/app/utils/highlight.util';

@Injectable({
  providedIn: 'root'
})
export class TaskProvider {

  tasks: TaskModel[] = tasks;
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
