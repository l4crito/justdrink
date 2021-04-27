import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  updateAvailable = false;
  constructor(private updates: SwUpdate, appRef: ApplicationRef) {
    updates.available.subscribe(event => {
      this.updates.activateUpdate().then(() => {
        this.updateAvailable = true;
      });
    });
    updates.activated.subscribe(event => {
      this.updateAvailable = true;
    });

    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(1 * 60 * 60 * 1000);
    const everyHour$ = concat(appIsStable$, everySixHours$);
    everyHour$.subscribe(() => { updates.checkForUpdate() });

  }

  verificarVersion() {
    // if (CoreFunctions.actualizando) {
    //   return;
    // }
    // CoreFunctions.actualizando = true;
    // this.actions.loading('Actualizando');
    // this.updates.checkForUpdate().then(() => {
    //   this.actions.dismiss();
    //   CoreFunctions.actualizando = false;
    // }).catch(() => {
    //   this.actions.dismiss();
    //   CoreFunctions.actualizando = false;
    // });
  }


  update() {
    this.updates.activateUpdate();
  }

}
