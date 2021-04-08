import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'jugadores', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/jugadores' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
