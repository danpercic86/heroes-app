import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

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
   * Decorator that marks a DOM property as a host-binding property and supplies configuration metadata.
   * Angular automatically checks host property bindings during change detection,
   * and if a binding changes it updates the host element of the directive.
   */
  @HostBinding('style.backgroundColor') color!: string;

  /**
   * The @HostListener() decorator registers a DOM event handler for the directive
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = 'yellow';
  }

  /**
   * It can capture the event that is emitted by the host element
   */
  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    console.log(event);
    this.setStyles();
  }

  ngOnInit() {
    this.setStyles();
  }

  setStyles() {
    if (this.isOdd) {
      this.color = 'red';
    } else {
      this.color = 'blue';
    }
  }
}
