import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- import HttpClientModule when you want to use HttpClient
  ],
  providers: [
    {
      provide: APP_CONFIG,
      /**
       * With useValue, you can provide a constant value for the token.
       */
      useValue: {
        apiUrl: 'https://retoolapi.dev/DVnLZy/heroes',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
