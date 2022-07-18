import { Component, OnInit } from '@angular/core';
import { HistoryModel } from 'src/app/models/history.model';
import { TaskProvider } from 'src/app/shared/provider/task.provider';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: HistoryModel[] = [];
  constructor(public taskProvider: TaskProvider) {
    taskProvider.history?.slice().splice(1).forEach(task => {
      const line = this.history.find(t => t.round === task.round)
      if (line) {
        line.tasks.push(task)
      } else {
        this.history.push({ round: task.round, tasks: [task] })
      }
    });
    console.log(this.history)
  }

  ngOnInit(): void {
  }

}
