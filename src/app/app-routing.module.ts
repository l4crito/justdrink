import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGuard } from './guards/game.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) },
  { path: 'tomar', canActivate: [GameGuard], loadChildren: () => import('./drink/drink.module').then(m => m.DrinkModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
