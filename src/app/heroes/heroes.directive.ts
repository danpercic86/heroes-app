import { Directive, ElementRef } from '@angular/core';

/**
 * The @Directive() decorator's configuration property specifies the directive's CSS attribute selector
 */

@Directive({
  selector: '[appHeroes]',
})
export class HeroesDirective {
  /**
   * Directives change the appearance or behavior of DOM elements and Angular components
   */
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
