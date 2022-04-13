import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HeroesApiService } from '../heroes-api.service';

/**
 * Guards are also services that can be injected into components.
 * So they must be decorated with @Injectable() and implement a guard interface.
 *
 * (see: https://angular.io/api/router/CanActivate)
 */
@Injectable({
  providedIn: 'root',
})
/**
 * CanActivate is a interface that a class can implement to be a guard deciding if a route can be activated.
 * If all guards return true, navigation continues.
 * If any guard returns false, navigation is cancelled.
 * If any guard returns a UrlTree, the current navigation is cancelled and a new navigation begins to the UrlTree returned from the guard.
 */
export class HeroDetailsGuard implements CanActivate {
  constructor(private heroesApiService: HeroesApiService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const heroId = Number(route.paramMap.get('id'));
    const hasHero$ = this.heroesApiService.loadHeroes().pipe(map(heroes => heroes.some(hero => hero.id === heroId)));

    return hasHero$.pipe(
      map(hasHero => {
        if (hasHero) {
          return true;
        } else {
          /**
           * If no hero was found redirect to the heroes page.
           */
          return this.router.parseUrl('/heroes');
        }
      }),
    );
  }
}
