import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagingService } from '../messaging/messaging.service';

@Injectable({
  providedIn: 'root'
})
export class MobMsgHandlerService {

  constructor(private _messaging: MessagingService) {
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
