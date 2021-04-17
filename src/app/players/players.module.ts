import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './components/player/player.component';
import { TaskComponent } from './components/task/task.component';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class PlayersModule { }
