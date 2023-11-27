/**
 * Contributors:
 * - Lubna Fatima
 * - Gangadaran Kameswaran
 */

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Configuration for server-side rendering.
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

// Merging application and server configurations.
export const config = mergeApplicationConfig(appConfig, serverConfig);
