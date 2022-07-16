import { Component, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/models/player.model';
import { TaskModel } from 'src/app/models/task.model';
import { TaskProvider } from 'src/app/shared/provider/task.provider';
import { Names } from 'src/app/utils/store.util';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: { player?: PlayerModel | undefined | null, task?: TaskModel, round?: number }[] | null | undefined = [];
  constructor(public taskProvider: TaskProvider) {
    this.history = taskProvider.history?.slice().splice(1);
  }

  ngOnInit(): void {
  }

}
