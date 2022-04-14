import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/models/hero.model';

@Injectable({
  /**
   * By default, all services will have the providedIn: 'root',
   * which means that they will be accessible to all components in the application.
   */
  providedIn: 'root',
})
export class AppService {
  constructor() {
    console.log('AppService constructor');
  }

  get message(): string {
    return 'Hello from AppService';
  }

  loadHeroes(): Observable<Hero[]> {
    return of([
      { id: 1, name: 'Superman', city: 'Metropolis', website: 'https://www.superman.com' },
      { id: 2, name: 'Batman', city: 'Gotham', website: 'https://www.batman.com' },
    ]);
  }
}
