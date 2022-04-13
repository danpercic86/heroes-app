import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { RouterModule } from '@angular/router';
import { HeroesResolver } from './heroes.resolver';


@NgModule({
  /**
   * Every component must be declared in exactly one NgModule.
   */
  declarations: [HeroesComponent],
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
    ]),
  ],
})
export class HeroesModule {
}
