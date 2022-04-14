import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() someInput?: string;

  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
    );

  /**
   * The constructor is always the first code to be executed in a class.
   */
  constructor(private breakpointObserver: BreakpointObserver) {
  }

  /**
   * Respond when Angular sets or resets data-bound input properties.
   * The method receives a SimpleChanges object of current and previous property values.
   * (see: https://angular.io/guide/lifecycle-hooks#onchanges)
   */
  ngOnChanges(simpleChanges: SimpleChanges) {
    /**
     * Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
     */
    console.log('ngOnChanges');
  }

  /**
   * Initialize the directive or component after Angular first displays the data-bound properties
   * and sets the directive or component's input properties
   * (see: https://angular.io/guide/lifecycle-hooks#oninit)
   */
  ngOnInit() {
    /**
     * Called once, after the first ngOnChanges().
     * ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).
     */
    console.log('ngOnInit');
  }

  /**
   * Detect and act upon changes that Angular can't or won't detect on its own.
   * (see: https://angular.io/guide/lifecycle-hooks#doCheck)
   */
  ngDoCheck() {
    /**
     * Called immediately after ngOnChanges() on every change detection run,
     * and immediately after ngOnInit() on the first run.
     */
    console.log('ngDoCheck');
  }

  /**
   * Respond after Angular projects external content into the component's view, or into the view that a directive is in.
   * (see: https://angular.io/guide/lifecycle-hooks#aftercontentinit)
   */
  ngAfterContentInit() {
    /**
     * Called once after the first ngDoCheck().
     */
    console.log('ngAfterContentInit');
  }

  /**
   * Respond after Angular checks the content projected into the component.
   * (see: https://angular.io/guide/lifecycle-hooks#aftercontentchecked)
   */
  ngAfterContentChecked() {
    /**
     * Called after ngAfterContentInit() and every subsequent ngDoCheck().
     */
    console.log('ngAfterContentChecked');
  }

  /**
   * Respond after Angular initializes the component's views and child views.
   * (see: https://angular.io/guide/lifecycle-hooks#afterviewinit)
   */
  ngAfterViewInit() {
    /**
     * Called once after the first ngAfterContentChecked().
     */
    console.log('ngAfterViewInit');
  }

  /**
   * Respond after Angular checks the component's views and child views.
   */
  ngAfterViewChecked() {
    /**
     * Called after ngAfterViewInit() and every subsequent ngAfterContentChecked().
     */
    console.log('ngAfterViewChecked');
  }

  /**
   * Cleanup just before Angular destroys the directive or component.
   * Unsubscribe Observables and detach event handlers to avoid memory leaks
   * (see: https://angular.io/guide/lifecycle-hooks#ondestroy)
   */
  ngOnDestroy() {
    /**
     * Called once, before the instance is destroyed.
     */
    console.log('ngOnDestroy');
  }
}
