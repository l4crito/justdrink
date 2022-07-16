import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotkeyModule } from 'angular2-hotkeys';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

// import * as Hammer from 'hammerjs';

// export class HammerConfig extends HammerGestureConfig {
//   overrides = {
//     swipe: { direction: Hammer.DIRECTION_ALL },
//   };
// }
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HotkeyModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    MaterialModule,
    HammerModule
  ],
  providers: [
    // {
    //   provide: HAMMER_GESTURE_CONFIG,
    //   useClass: HammerConfig  
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
