import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroesApiService } from './heroes-api.service';
import { Hero } from './models/hero.model';

/**
 * Resolvers are also services that can be injected into components.
 * They are used to resolve data before the component is loaded.
 * So they must be decorated with @Injectable() and implement the Resolve interface.
 *
 * (see: https://angular.io/api/router/Resolve)
 */
@Injectable({
  providedIn: 'root',
})
export class HeroesResolver implements Resolve<Hero[]> {
  /**
   * Use dependency injection to inject the HeroesApiService.
   */
  constructor(private heroesApiService: HeroesApiService) {
  }

  /**
   * This method retrieves the data needed to activate the requested route.
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
    return this.heroesApiService.getHeroes();
  }
}
