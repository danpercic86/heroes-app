import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Heroes App';
  /**
   * Property decorator that configures a view query.
   * The change detector looks for the first element or the directive matching the selector in the view DOM.
   * If the view DOM changes, and a new child matches the selector, the property is updated.
   *
   * !! View queries are set before the ngAfterViewInit callback is called.
   */
  @ViewChild(MenuComponent) menu!: MenuComponent;

  /**
   * This instance of the AppService is from the global (or root) scope
   */
  constructor(appService: AppService) {
    console.log(appService.message);
  }

  ngAfterViewInit() {
    /**
     * Using the @ViewChild decorator, we can access the MenuComponent instance from the AppComponent
     */
    this.menu.isHandset$.subscribe(isHandset => {
      console.log(isHandset);
    });
  }
}
