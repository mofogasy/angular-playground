import { Injectable } from '@angular/core';
import { MessageDispatcherService } from '../messaging/message-dispatcher.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedMsgHandlerService {

  constructor(private _messaging: MessageDispatcherService) {}

  public get speed(): Observable<any> {
    return this._messaging.speed;
  }
}
