import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HeroesApiService } from '../heroes-api.service';

@Injectable({
  providedIn: 'root',
})
export class HeroEditResolver implements Resolve<Hero> {
  constructor(private heroesApiService: HeroesApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
    const heroId = Number(route.paramMap.get('id'));
    return this.heroesApiService.loadHeroes().pipe(map(heroes => heroes.find(hero => hero.id === heroId) as Hero));
  }
}
