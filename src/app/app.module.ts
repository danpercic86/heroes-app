import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { HeroesApiService } from './heroes/heroes-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddressComponent } from './address/address.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

export interface AppConfig {
  apiUrl: string;
}

/**
 * InjectionToken creates a token that can be used with dependency injection.
 * Use an InjectionToken whenever the type you are injecting is not reified (does not have a runtime representation)
 * such as when injecting an interface, callable type, array or parameterized type.
 */
export const APP_CONFIG = new InjectionToken<AppConfig>('This is the configuration object');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddressComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- import HttpClientModule when you want to use HttpClient
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
  ],
  providers: [
    {
      provide: APP_CONFIG,
      /**
       * If we need other service to configure our APP_CONFIG,
       * then we can use a factory and inject into it the service that we need
       */
      useFactory: (appService: AppService) => {
        console.log('APP_CONFIG initialized using AppService: ', appService.message);
        return {
          apiUrl: 'https://retoolapi.dev/DVnLZy/heroes',
        };
      },
      /**
       * To use AppService in our factory we need to specify that it's a dependency
       */
      deps: [AppService],
    },
    {
      /**
       * Different classes can provide the same service.
       * The following code tells the injector to return a AppService instance
       * when the component asks for heroes api using the HeroesApiService token.
       */
      provide: HeroesApiService,
      useClass: AppService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
