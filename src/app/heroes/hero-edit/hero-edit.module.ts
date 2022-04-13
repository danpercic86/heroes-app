import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroEditComponent } from './hero-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeroEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HeroEditComponent },
    ]),
  ],
})
export class HeroEditModule {
}
