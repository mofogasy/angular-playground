import { Injectable } from '@angular/core';
import { MobService } from '../mob/mob.service';
import { Observable, Subject } from 'rxjs';
import { LenkereignisMsgHandlerService } from './lenkereignis-msg-handler.service';
import { generateLenkereignis } from '../messaging/messaging.service';

@Injectable({
  providedIn: 'root'
})
export class LenkereignisService {

  private _le$: Subject<any> = new Subject();

  constructor(private _leMsgHandler: LenkereignisMsgHandlerService,
              private _mobService: MobService) {

    this._leMsgHandler.le.subscribe(this._le$);

    this._mobService.selectedMob.subscribe(mob => {
      this._leMsgHandler.subscribeToLE(mob);

      // simulate initial load of lenkereignisse
      this._le$.next(generateLenkereignis('#000'));
    });
  }

  public get le(): Observable<any> {
    return this._le$.asObservable();
  }
}
