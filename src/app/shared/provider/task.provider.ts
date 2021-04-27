import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  task$ = new Subject<boolean>();
  constructor(private googleService: GoogleSheetService) {
    this.getPool()
    this.getTasks();
    this.task$.pipe(
      debounceTime(300)
    ).subscribe(() => { this.fetchTasks(); })
  }

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
    const taskPresent = this.taskPool.find(taskInArray => taskInArray.id === task.id);
    if (taskPresent) {
      Object.assign(taskPresent, task);
    } else {
      this.taskPool.push(task);
    }
  }

  removeTask(task: TaskModel) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  getTasks() {
    this.task$.next(true);
  }

  fetchTasks() {
    const lastUpdate = localStorage.getItem("lastUpdate");
    if (lastUpdate) {
      const currentDate = new Date();
      const lastDate = new Date(lastUpdate);
      let diff = (currentDate.getTime() - lastDate.getTime()) / 1000;
      if (diff < 300) {
        return;
      }
    }

    localStorage.setItem("lastUpdate", new Date().toString());
    this.googleService.getTasks().subscribe((res: any) => {
      var lines = res.split("\r\n");
      var result = [];
      var headers = lines[0].split(",");
      for (var i = 1; i < lines.length; i++) {

        var obj: any = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j].trim()] = currentline[j].trim();
        }
        result.push(obj);
      }

      const tasks: TaskModel[] = result.filter(t => t.id && t.reto).map(t => {
        return { id: t.id, task: t.reto, type: t.tipo }
      });
      tasks.forEach(task => { this.addTask(task) });
      this.storePool();
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

  storePool() {
    localStorage.setItem("tasks", JSON.stringify(this.taskPool));
  }
  getPool() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.taskPool = JSON.parse(tasks);
      this.filterTasks();
      this.animateDears();
    }
  }

}
