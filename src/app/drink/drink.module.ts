import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    DrinkComponent
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ]
})
export class DrinkModule { }
