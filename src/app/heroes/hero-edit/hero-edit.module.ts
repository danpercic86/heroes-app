import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroEditComponent } from './hero-edit.component';
import { RouterModule } from '@angular/router';
import { HeroEditResolver } from './hero-edit.resolver';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroEditComponent,
        resolve: {
          hero: HeroEditResolver,
        },
      },
    ]),
    /**
     * This module declares the reactive-form directives that you need to use reactive forms
     */
    ReactiveFormsModule,
  ],
})
export class HeroEditModule {
}
