import { Injectable } from '@angular/core';
import { MessageDispatcherService } from '../messaging/message-dispatcher.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenkereignisMsgHandlerService {

  constructor(private _messaging: MessageDispatcherService) { }

  public get le(): Observable<any> {
    return this._messaging.lenkereignis;
  }

  subscribeToLE(mob: any): any[] {
    if (mob) {
      return this._messaging.subscribeToLenkereignis(mob.id);
    } else {
      this._messaging.unsubscribeFromLenkereignis();
    }
    return null;
  }
}
