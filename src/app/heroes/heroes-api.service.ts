import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './models/hero.model';

/**
 * @Injectable() decorator marks the class as one that participates in the dependency injection system.
 * This means that Angular takes care of creating the object and passing it as a parameter to the constructor of another class.
 * (see: https://angular.io/guide/architecture-services)
 */
@Injectable({
  /**
   * The @Injectable() decorator accepts a metadata object for the service,
   * the same way the @Component() decorator did for your component classes.
   *
   * The providedIn: 'root' specifies that the service can be injected into the root of the application
   * and is available to any of the feature modules/components in the application.
   * (see: https://angular.io/api/core/Injectable#options)
   */
  providedIn: 'root',
})
export class HeroesApiService {
  /**
   * Services are a great way to share information among classes that don't know each other.
   */

  /**
   * To be able to make requests to the server, we need to inject an HttpClient object and use it
   */
  constructor(private http: HttpClient) {
  }

  /**
   * All HttpClient methods return an RxJS Observable of something.
   * HTTP is a request/response protocol. You make a request, it returns a single response
   * (see: https://angular.io/guide/observables-in-angular)
   *
   * In general, an observable can return multiple values over time.
   * An observable from HttpClient always emits a single value and then completes, never to emit again.
   *
   * This particular HttpClient.get() call returns an Observable<Hero[]>; that is, "an observable of hero array".
   * In practice, it will only return a single hero array
   * (see: https://angular.io/guide/http#communicating-with-backend-services-using-http)
   */
  getHeroes() {
    /**
     * this.http.get returns the body of the response as an untyped JSON object by default.
     * Applying the optional type specifier, <Hero[]> , adds TypeScript capabilities, which reduce errors during compile time.
     */
    return this.http.get<Hero[]>('https://retoolapi.dev/7LV5Tg/heroes');
  }
}
