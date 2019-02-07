import { Injectable } from '@angular/core';
import { MobMsgHandlerService } from './mob-msg-handler.service';
import { combineLatest, Observable } from 'rxjs';
import { MobSelectionHandlerService } from './mob-selection-handler.service';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobService {
  public selectedMobValue: any;

  constructor(private _mobMsgHandler: MobMsgHandlerService, private _mobSelectionHandler: MobSelectionHandlerService) {
    this._mobSelectionHandler.selectedMob.pipe(
      tap((mob) => console.log('mob selection changed', mob))
    ).subscribe(mob => {
      this.selectedMobValue = mob;
      this._mobMsgHandler.subscribeMobInfoFor(mob);
    });
  }

  public get mobs(): Observable<any> {
    return this._mobMsgHandler.mobs;
  }

  public get selectedMob(): Observable<any> {
    return this._mobSelectionHandler.selectedMob;
  }

  public get mobInfo(): Observable<any> {
    return combineLatest(this._mobMsgHandler.mobInfo, this.selectedMob).pipe(
      map(value => ({info: value[0], selection: value[1]})),
      map(data => data.selection ? data.info : null),
      distinctUntilChanged()
    );
  }

  getMobFromPv(pv: string) {
    // retrieve a fake mob, in a real scenario the mob would be retrieved from a store
    const id = 'mob' + pv[2];
    return {id};
  }
}
