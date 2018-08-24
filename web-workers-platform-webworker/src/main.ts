import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapWorkerUi} from '@angular/platform-webworker';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
bootstrapWorkerUi('webworker.bundle.js');
