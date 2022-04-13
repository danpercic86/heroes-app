import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './hero-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


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
      },
    ]),
  ],
})
export class HeroDetailsModule {
}
