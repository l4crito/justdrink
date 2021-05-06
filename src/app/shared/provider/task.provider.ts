import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TaskModel, TaskType } from 'src/app/models/task.model';
import { getItem, Names, setItem } from 'src/app/utils/store.util';
import { environment } from 'src/environments/environment';
import { GoogleSheetService } from '../services/google-sheet.service';

@Injectable({
  providedIn: 'root'
})
export class TaskProvider {
  others = false;
  tasks: TaskModel[] = [];
  taskPool: TaskModel[] = [];
  assignedTasks: TaskModel[] = [];
  currentTask: TaskModel | undefined | null;
  types: TaskType[] = [TaskType.NORMAL];
  animateBg = false;
  animateNumber = false;
  task$ = new Subject<boolean>();
  round$ = new BehaviorSubject<number>(0);
  day = 3600 * 24;
  constructor(private googleService: GoogleSheetService) {
    this.getPool()
    this.task$.pipe(
      debounceTime(300)
    ).subscribe(() => { this.fetchTasks(); })
    this.getTasks();
  }

  set round(value: number) {
    setItem(Names.ROUND, value);
    this.round$.next(value);
  }
  get round(): number {
    return this.round$.value;
  }

  assignTask(): any {
    if (this.assignedTasks.length >= this.tasks.length) {
      this.assignedTasks = [];
      this.round++;
    }
    const unasignedTasks = this.tasks
      .filter(task => !this.assignedTasks.find(at => task.id === at.id))
      .filter(task => this.round >= (task.round ? task.round : 1));
    const index = Math.floor(Math.random() * unasignedTasks.length);
    const task = unasignedTasks[index];
    this.assignedTasks.push(task);
    setItem(Names.ASSIGNED_TASKS, this.assignedTasks);
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
    if (environment.production && this.taskPool.length) {
      if (this.getTimeDifference() < 180) {
        return;
      }
    }
    localStorage.setItem(Names.LAST_UPDATE, new Date().toString());
    this.googleService.getTasks().subscribe((res: any) => {
      var lines = res.split("\r\n");
      var result = [];
      var headers = lines[0].split("\t");
      for (var i = 1; i < lines.length; i++) {

        var obj: any = {};
        var currentline = lines[i].split("\t");

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j].trim()] = currentline[j].trim();
        }
        result.push(obj);
      }

      const tasks: TaskModel[] = result.filter(t => t.id.trim() && t.reto.trim()).map(t => {
        return { id: t.id, task: t.reto, type: t.tipo, round: t.ronda ? t.ronda : -1 }
      });
      this.taskPool = tasks;
      this.storePool();
      this.animateDears();
      this.filterTasks();
    });
  }

  async filterTasks() {
    this.tasks = this.taskPool.filter(task => this.types.find(type => task.type === type) ? true : false);
    if (!this.others) {
      this.tasks = this.tasks.filter(task => !task.task?.includes('(o)'));
    }
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
    setItem(Names.TASKS, this.taskPool);
  }
  getPool() {
    const tasks = getItem(Names.TASKS);
    if (tasks) {
      this.taskPool = tasks;
      this.filterTasks();
      this.animateDears();
    }

    const assignedTasks = getItem(Names.TASKS);
    this.assignedTasks = assignedTasks ? assignedTasks : [];
  }

  getTimeDifference(action: Names = Names.LAST_UPDATE) {
    const lastUpdate = localStorage.getItem(action);
    if (lastUpdate) {
      const currentDate = new Date();
      const lastDate = new Date(lastUpdate);
      const diff = (currentDate.getTime() - lastDate.getTime()) / 1000;
      return diff;
    }
    return 5 * this.day;
  }

}
