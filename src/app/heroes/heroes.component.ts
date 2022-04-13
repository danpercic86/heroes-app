import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero.model';
import { HeroesApiService } from './heroes-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/**
 @Component is a decorator function that specifies the Angular metadata for the component (such as styles, templates, and selector).
 */
@Component({
  selector: 'app-heroes', /** The component's CSS element selector */
  templateUrl: './heroes.component.html', /** The location of the component's template file */
  styleUrls: ['./heroes.component.scss'], /** The location of the component's private CSS styles */
})
export class HeroesComponent implements OnInit {
  /**
   * A component is a Typescript class that has a template (HTML) to render
   * Optionally, a component can have a CSS file to style the template
   */


  /**
   * All public properties of a component class are automatically available in the template
   */
  heroes$: Observable<Hero[]>;

  constructor(private heroesApiService: HeroesApiService, private router: Router) {
    /**
     * Assign the observable to the heroes$ property and subscribe to it in template using async pipe
     */
    this.heroes$ = this.heroesApiService.getHeroes();
  }

  /**
   * This is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
   * It is called only once after constructor, when the directive is instantiated
   */
  ngOnInit() {

  }

  onSelect(hero: Hero) {
    /**
     * Navigate to the hero detail page when a hero is selected
     */
    return this.router.navigate(['/heroes', hero.id]);
  }
}
