import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero.model';
import { HeroesApiService } from './heroes-api.service';

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
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroesApiService: HeroesApiService) {
  }

  /**
   * This is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
   * It is called only once after constructor, when the directive is instantiated
   */
  ngOnInit() {
    /**
     * While you could call getHeroes() in the constructor, that's not the best practice.
     * Reserve the constructor for minimal initialization such as wiring constructor parameters to properties.
     * The constructor shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
     *
     * Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit()
     * at an appropriate time after constructing a HeroesComponent instance.
     */
    this.heroesApiService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
