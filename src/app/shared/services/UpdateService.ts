import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  updateAvailable = false;
  constructor(private updates: SwUpdate, appRef: ApplicationRef) {
    if (environment.production) {
      updates.available.subscribe(() => {
        this.updates.activateUpdate().then(() => {
          this.updateAvailable = true;
        });
      });
      updates.activated.subscribe(() => {
        this.updateAvailable = true;
      });

      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
      const everySixHours$ = interval(1 * 60 * 60 * 1000);
      const everyHour$ = concat(appIsStable$, everySixHours$);
      everyHour$.subscribe(() => { updates.checkForUpdate() });
    }

  }

  update() {
    this.updates.activateUpdate();
  }

}
