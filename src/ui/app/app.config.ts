/**
 * Contributors:
 * - Josh Marsden
 * - Lubna Fatima
 * - Gangadaran Kameswaran
 */

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

// Configuration for the Angular application.
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Setting up application routes.
    provideClientHydration(), // Providing client-side hydration for Angular.
    provideHttpClient(withFetch()), // Configuring HTTP client with Fetch.
    { provide: 'baseUrl', useValue: environment.apiUrl }, // Setting base URL for HTTP requests.
  ]
};
