import { Component } from '@angular/core';
import { HeroesApiService } from '../heroes-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
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

    /**
     * When heroId$ emits a new value, we will fetch the hero with that id from the already loaded heroes.
     */
    this.hero$ = heroId$.pipe(
      map(heroId => this.heroesApiService.heroes.find(hero => hero.id === heroId) as Hero),
    );
  }
}
