import { Component, OnInit } from '@angular/core';
import { rightToLeft } from 'src/app/animations';
import { HistoryModel } from 'src/app/models/history.model';
import { PlayerModel } from 'src/app/models/player.model';
import { PlayerTaskModel } from 'src/app/models/task.model';
import { TaskProvider } from 'src/app/shared/provider/task.provider';

@Component({
  animations:[rightToLeft],
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: HistoryModel[] = [];
  title = "Historial"
  selectedPlayer: PlayerModel | null = null;
  constructor(public taskProvider: TaskProvider) {
    this.initHistory();
  }

  ngOnInit(): void {
  }
  initHistory() {
    this.title="Historial"
    this.history = [];
    this.selectedPlayer = null;
    this.getHisthory(this.taskProvider.history?.slice().splice(1));
  }

  getHisthory(h: PlayerTaskModel[]) {
    h.forEach(task => {
      const line = this.history.find(t => t.round === task.round)
      if (line) {
        line.tasks.push(task)
      } else {
        this.history.push({ round: task.round, tasks: [task] })
      }
    });
  }

  filterHistory(player?: PlayerModel | undefined | null) {
    if (!player) {
      return;
    }
    this.history = [];
    this.title = "Historial de ";
    this.selectedPlayer = player;
    this.getHisthory(this.taskProvider.history?.filter(h => h.player?.name === player.name));
  }

}
