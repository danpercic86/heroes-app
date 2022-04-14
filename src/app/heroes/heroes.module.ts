import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { RouterModule } from '@angular/router';
import { HeroesResolver } from './heroes.resolver';
import { HeroesDirective } from './heroes.directive';
import { AppService } from '../app.service';


@NgModule({
  /**
   * Every component must be declared in exactly one NgModule.
   */
  declarations: [
    HeroesComponent,
    /**
     * Directives, as well as components, must be declared in exactly one NgModule.
     */
    HeroesDirective,
  ],
  imports: [
    CommonModule,
    /**
     * Creates a module with all the router directives and a provider registering routes, without creating a new Router service.
     * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
     */
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent,
        /**
         * Fetch data before the component is loaded and store it in the heroes key
         *
         */
        resolve: {
          heroes: HeroesResolver,
        },
      },
      {
        /**
         * Use ":" to specify a parameter.
         */
        path: ':id',
        loadChildren: () => import('./hero-details/hero-details.module').then(m => m.HeroDetailsModule),
      },
      {
        /**
         * Use ":" to specify a parameter.
         */
        path: ':id/edit',
        loadChildren: () => import('./hero-edit/hero-edit.module').then(m => m.HeroEditModule),
      },
    ]),
  ],
  /**
   * The providers array tells Angular to create a single, shared instance of AppService
   * and inject into any class from HeroesModule that asks for it, including child lazy loaded modules.
   */
  providers: [
    {
      /**
       * Similarly to the tokens, you can also provide a provider for a service.
       * This is actually the way to provide a service,
       * and providers: [AppService] is just a shorthand
       */
      provide: AppService,
      useClass: AppService,
    },
    /**
     * This is a shorthand for providers: [{ provide: AppService, useClass: AppService }]
     */
    AppService,
  ],
})
export class HeroesModule {

  /**
   * This instance of the AppService is from the HeroesModule scope,
   * which means that is not the same instance as the AppService from the AppModule scope.
   */
  constructor(appService: AppService) {
    console.log(appService.message);
  }
}
