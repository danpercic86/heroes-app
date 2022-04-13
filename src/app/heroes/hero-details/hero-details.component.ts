import { Component } from '@angular/core';
import { HeroesApiService } from '../heroes-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent {
  readonly hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroesApiService: HeroesApiService,
  ) {
    /**
     * Get an observable for heroId so that we will be notified when it changes.
     */
    const heroId$ = route.paramMap.pipe(map(params => Number(params.get('id'))));
    const heroes$ = heroesApiService.getHeroes();

    /**
     * Combine the heroId$ and heroes$ observables into a single observable that emits
     * the hero whose id matches the heroId.
     */
    this.hero$ = combineLatest([heroId$, heroes$]).pipe(
      map(([heroId, heroes]) => heroes.find(hero => hero.id === heroId)),
      switchMap(async foundHero => {
        if (foundHero) {
          return foundHero;
        } else {
          /**
           * If the hero is not found, navigate to the heroes page.
           */
          await router.navigate(['/heroes']);
          return {} as Hero;
        }
      }),
    );
  }
}
