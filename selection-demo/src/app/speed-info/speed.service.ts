import { Injectable } from '@angular/core';
import { MobService } from '../mob/mob.service';
import { SpeedMsgHandlerService } from './speed-msg-handler.service';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {

  constructor(private _mobService: MobService, private _speedHandler: SpeedMsgHandlerService) { }

  public get speed(): Observable<any> {
    return this._speedHandler.speed.pipe(
      withLatestFrom(this._mobService.selectedMob, (speed, selected) => ({speed, selected})),
      filter(data => data.selected && data.speed.mobId === data.selected.id),
      map(data => data.speed),
      distinctUntilChanged()
    );
  }
}
