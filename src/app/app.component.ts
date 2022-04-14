import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Heroes App';

  /**
   * This instance of the AppService is from the global (or root) scope
   */
  constructor(appService: AppService) {
    console.log(appService.message);
  }
}
