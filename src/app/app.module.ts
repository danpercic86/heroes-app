import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    /**
     * Every component must be declared in exactly one NgModule.
     * Angular CLI by default declared HeroesComponent in the AppModule when it generated that component.
     */
    HeroesComponent,
    HeroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- import HttpClientModule when you want to use HttpClient
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
