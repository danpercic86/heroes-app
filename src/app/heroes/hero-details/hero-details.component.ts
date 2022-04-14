import { Component } from '@angular/core';
import { HeroesApiService } from '../heroes-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
  /**
   * The providers array from components work the same way as the providers array from modules,
   * except that they are only available to the component and its children.
   */
  providers: [AppService],
})
export class HeroDetailsComponent {
  readonly hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroesApiService: HeroesApiService,
    /**
     * This instance ao AppService is different from the one from HeroesModule and the one from global scope
     */
    appService: AppService,
  ) {
    console.log(appService.message);
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
