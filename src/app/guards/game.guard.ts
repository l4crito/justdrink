import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerProvider } from '../shared/provider/player.provider';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  constructor(
    private playerProvider: PlayerProvider,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const enoughtPlayers = this.playerProvider.players.length > 1;
    if (!enoughtPlayers) {
      this.router.navigate(['/jugadores']);
    }
    return enoughtPlayers;
  }

}
