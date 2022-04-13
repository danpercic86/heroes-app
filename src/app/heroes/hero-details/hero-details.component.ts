import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() hero?: Hero;

  /**
   * The @Output() decorator in a child component or directive lets data flow from the child to the parent.
   * The child component uses the @Output() property to raise an event to notify the parent of the change.
   * To raise an event, an @Output() must have the type of EventEmitter, which is a class in @angular/core that you use to emit custom events.
   * (see: https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component)
   */
  @Output() readonly heroChange = new EventEmitter<Hero>();
}
