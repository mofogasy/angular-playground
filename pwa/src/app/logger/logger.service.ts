import {ApplicationRef, Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {interval} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private swUpdate: SwUpdate) {
    console.log('Logger Service initialized');

    this.swUpdate.available.subscribe(event => {
      console.log('AVAILABLE');
      console.log('current', event.current);
      console.log('available', event.available);
    });

    this.swUpdate.activated.subscribe(event => {
      console.log('ACTIVATED');
      console.log('previous', event.previous);
      console.log('current', event.current);
    });
  }

  checkForUpdate(): void {
    this.swUpdate.checkForUpdate();
  }

  activateUpdate(): void {
    this.swUpdate.activateUpdate();
  }
}
