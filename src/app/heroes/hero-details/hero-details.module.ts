import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './hero-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroDetailsGuard } from './hero-details.guard';


@NgModule({
  /**
   * Every component must be declared in exactly one NgModule.
   */
  declarations: [HeroDetailsComponent],
  imports: [
    CommonModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forChild([
      {
        path: '',
        component: HeroDetailsComponent,
        /**
         * The defined guard function is provided as part of the Route object in the router configuration:
         */
        canActivate: [HeroDetailsGuard],
      },
    ]),
  ],
})
export class HeroDetailsModule {
}
