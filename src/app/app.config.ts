import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './heroes/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // provideHttpClient(withFetch()),
    // importProvidersFrom(
    //   HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //     dataEncapsulation: false,
    //     apiBase: 'api/',
    //   })
    // ),

    provideRouter(routes),
    provideClientHydration(),
    // importProvidersFrom(
    //   HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    // ),
  ],
};
