import { Injectable } from '@angular/core';
import { MessagingService } from '../messaging/messaging.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedHandlerService {

  constructor(private _messaging: MessagingService) {}

  public get speed(): Observable<any> {
    return this._messaging.speed;
  }
}
