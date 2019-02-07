import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SelectionHandler } from '../rendering-engine/selection-dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class MobSelectionHandlerService implements SelectionHandler {

  private _selectedMob$: BehaviorSubject<any> = new BehaviorSubject(null);
  private _lastSelected: any = null;

  constructor() {
  }

  onSelect(element: any) {
    console.log('mob selected');
    this._lastSelected = element;
    this._selectedMob$.next(element);
  }

  onFollowingSelect(element: any): void {
    if (element.id !== this._lastSelected.id) {
      console.log('new mob selected');
      this.teardown();
      this.onSelect(element);
    } else {
      // don't do anything
      console.log('same mob selected again');
    }
  }

  teardown(): void {
    console.log('mob select teardown');
    this._lastSelected = null;
    this._selectedMob$.next(null);
  }

  public get selectedMob(): Observable<any> {
    return this._selectedMob$.asObservable();
  }
}
