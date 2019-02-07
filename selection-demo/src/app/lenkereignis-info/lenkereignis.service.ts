import { Injectable } from '@angular/core';
import { MobService } from '../mob/mob.service';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { LenkereignisMsgHandlerService } from './lenkereignis-msg-handler.service';
import { generateLenkereignis } from '../messaging/messaging.service';
import { LenkereignisClickHandlerService } from './lenkereignis-click-handler.service';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LenkereignisService {

  private _le$: Subject<any[]> = new Subject();
  private _leInfo$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _leMsgHandler: LenkereignisMsgHandlerService,
              private _mobService: MobService,
              private _leClickHandler: LenkereignisClickHandlerService) {

    this._leMsgHandler.le.subscribe(this._le$);

    this._mobService.selectedMob.subscribe(mob => {
      this._leMsgHandler.subscribeToLE(mob);

      // simulate initial load of lenkereignisse
      if (mob) {
        this._le$.next(generateLenkereignis('#000'));
      }
    });

    combineLatest(this.le, this._leClickHandler.lastClicked).pipe(
      map(value => ({leList: value[0], selection: value[1]})),
      filter(data => !!data.selection),
      map(data => {
        if (!data.leList) {
          return data.selection;
        }
        return data.leList.find(le => le.id === data.selection.id);
      })
    ).subscribe(this._leInfo$);
  }

  public get le(): Observable<any[]> {
    return this._le$.asObservable();
  }

  public get leInfo(): Observable<any[]> {
    return this._leInfo$.asObservable();
  }
}
