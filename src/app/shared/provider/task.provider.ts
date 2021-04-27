import { Injectable } from '@angular/core';
import { TaskModel, TaskType } from 'src/app/models/task.model';
import { highlight } from 'src/app/utils/highlight.util';
import { GoogleSheetService } from '../services/google-sheet.service';

@Injectable({
  providedIn: 'root'
})
export class TaskProvider {

  tasks: TaskModel[] = [];
  taskPool: TaskModel[] = [];
  assignedTasks: TaskModel[] = [];
  currentTask: TaskModel | undefined | null;
  types: TaskType[] = [TaskType.NORMAL];
  animateBg = false;
  animateNumber = false;
  constructor(private googleService: GoogleSheetService) { }

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

  getTasks() {
    this.googleService.getTasks().subscribe((res: any) => {
      var lines = res.split("\r\n");

      var result = [];

      // NOTE: If your columns contain commas in their values, you'll need
      // to deal with those before doing the next step 
      // (you might convert them to &&& or something, then covert them back later)
      // jsfiddle showing the issue https://jsfiddle.net/
      var headers = lines[0].split(",");
      for (var i = 1; i < lines.length; i++) {

        var obj: any = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j].trim()] = currentline[j].trim();
        }
        result.push(obj);
      }

      this.taskPool = result.filter(t => t.id && t.reto).map(t => {
        return { id: t.id, task: t.reto, type: t.tipo }
      });
      this.animateDears();
      this.filterTasks();
    });
  }

  filterTasks() {
    this.tasks = this.taskPool.filter(task => this.types.find(type => task.type === type) ? true : false);
  }
  animateDears() {
    this.animateBg = true;
    setTimeout(() => {
      this.animateNumber = true;
    }, 500);
  }

  addType(type: TaskType) {
    this.types.push(type);
    this.filterTasks();
  }

  removeType(type: TaskType) {
    this.types = this.types.filter(t => t !== type);
    this.filterTasks();
  }

}
