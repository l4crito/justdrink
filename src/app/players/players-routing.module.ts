import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PlayersComponent } from './players.component';

const routes: Routes = [{ path: '', component: PlayersComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
