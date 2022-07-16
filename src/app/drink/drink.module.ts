import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HistoryComponent } from './components/history/history.component';


@NgModule({
  declarations: [
    DrinkComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [

  ]
})
export class DrinkModule { }
