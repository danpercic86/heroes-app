import { Injectable } from '@angular/core';

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
}
