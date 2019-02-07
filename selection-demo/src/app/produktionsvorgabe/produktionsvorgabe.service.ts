import { Injectable } from '@angular/core';
import { MobService } from '../mob/mob.service';
import { SelectionDispatcherService } from '../rendering-engine/selection-dispatcher.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduktionsvorgabeService {

  constructor(private _mobService: MobService, private _selectionDispatcher: SelectionDispatcherService) { }

  selectPv(pv: string) {
    const mob = this._mobService.getMobFromPv(pv);
    this._selectionDispatcher.onSelect(mob);
  }

  get pv(): Observable<any> {
    return this._mobService.selectedMob.pipe(
      map(mob => mob ? this.getPvForMob(mob.id) : null)
    );
  }

  private getPvForMob(mobId: string): any {
    return mobId === 'mob1' ?
      {id: 'line', points: [{x: 10, y: 10}, {x: 375, y: 375}, {x: 750, y: 0}, {x: 775, y: 25}, {x: 425, y: 375}]} :
      {id: 'line', points: [{x: 500, y: 330}, {x: 170, y: 0}, {x: 0, y: 170}, {x: 375, y: 545}, {x: 605, y: 775}]};
  }
}
