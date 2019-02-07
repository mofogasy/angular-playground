import { Injectable } from '@angular/core';
import { MessagingService } from '../messaging/messaging.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LenkereignisMsgHandlerService {

  constructor(private _messaging: MessagingService) { }

  public get le(): Observable<any> {
    return this._messaging.lenkereignis.pipe(tap(le => console.log(le)));
  }

  subscribeToLE(mob: any): void {
    if (mob) {
      this._messaging.subscribeToLenkereignis(mob.id);
    } else {
      this._messaging.unsubscribeFromLenkereignis();
    }
  }
}
