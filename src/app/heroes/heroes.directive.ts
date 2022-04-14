import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * The @Directive() decorator's configuration property specifies the directive's CSS attribute selector
 */

@Directive({
  selector: '[appHeroes]',
})
export class HeroesDirective implements OnInit {
  /**
   * We can specify an alias for the directive's input property, in this case is appHeroes
   */
  @Input('appHeroes') isOdd!: boolean;
  @Input() isEven!: boolean;

  /**
   * Directives change the appearance or behavior of DOM elements and Angular components
   */
  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.setStyles();
  }

  setStyles() {
    if (this.isOdd) {
      this.element.nativeElement.style.backgroundColor = 'red';
    } else {
      this.element.nativeElement.style.backgroundColor = 'blue';
    }
  }
}
