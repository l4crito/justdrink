import { Component } from '@angular/core';
import { UpdateService } from './shared/services/UpdateService';

@Component({
  animations: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'justdrink';
  constructor(public updateService: UpdateService) { }

  cancelUpdate() {
    this.updateService.updateAvailable = false;
  }
  updateApp() {
    document.location.reload();
  }
}
