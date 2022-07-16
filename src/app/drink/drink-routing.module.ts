import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { DrinkComponent } from './drink.component';

const routes: Routes = [
  { path: '', component: DrinkComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkRoutingModule { }
