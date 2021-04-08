import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DrinkComponent
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class DrinkModule { }
