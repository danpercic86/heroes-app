import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

/**
 * Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
 * This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something like localhost:4200/heroes.
 */
const routes: Routes = [{
  path: 'heroes',
  component: HeroesComponent,
}];

@NgModule({
  /**
   * The @NgModule metadata initializes the router and starts it listening for browser location changes.
   * The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot()
   */
  imports: [
    /**
     * The method is called forRoot() because you configure the router at the application's root level.
     * The forRoot() method supplies the service providers and directives needed for routing,
     * and performs the initial navigation based on the current browser URL.
     */
    RouterModule.forRoot(routes),
  ],
  /**
   * Next, AppRoutingModule exports RouterModule so it will be available throughout the application.
   */
  exports: [RouterModule],
})
export class AppRoutingModule {

}
