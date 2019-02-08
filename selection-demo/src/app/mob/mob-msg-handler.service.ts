import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDispatcherService } from '../messaging/message-dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class MobMsgHandlerService {

  constructor(private _messaging: MessageDispatcherService) {
  }

  get mobs(): Observable<any> {
    return this._messaging.mobs;
  }

  get mobInfo(): Observable<any> {
    return this._messaging.mobInfo;
  }

  subscribeMobInfoFor(mob: any) {
    if (mob) {
      this._messaging.subscribeToMobInfo(mob.id);
    } else {
      this._messaging.unsubscribeFromMobInfo();
    }
  }
}
