import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  /**
   * Every component must be declared in exactly one NgModule.
   */
  declarations: [HeroesComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    /**
     * Creates a module with all the router directives and a provider registering routes, without creating a new Router service.
     * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
     */
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent,
        /**
         * An array of child Route objects that specifies a nested route configuration.
         * The following route specifies that when navigating to, for example, /heroes/11,
         * the router creates the 'HeroesComponent' with the 'HeroDetailComponent' child in it.
         */
        children: [
          {
            /**
             * Use ":" to specify a parameter.
             */
            path: ':id',
            component: HeroDetailsComponent,
          },
        ],
      },
    ]),
  ],
})
export class HeroesModule {
}
