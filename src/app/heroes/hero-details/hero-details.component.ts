import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent {
  /**
   * The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.
   * In this case, the hero property receives a Hero object from the HeroesComponent
   * (see: https://angular.io/guide/inputs-outputs#sharing-data-between-child-and-parent-directives-and-components)
   */
  @Input() hero!: Hero;
}
