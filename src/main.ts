import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {LogLevel, PLATFORM_CONSOLE_LOGGER, RNgPlatformLogger} from "rng-logger";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
    ...RNgPlatformLogger({
      level: LogLevel.TRACE,
      maxBuffer: 100,
      nonResolvedStrategy: "ERROR"
    }),
    PLATFORM_CONSOLE_LOGGER
  ]
).bootstrapModule(AppModule)
  .catch(err => console.error(err));
