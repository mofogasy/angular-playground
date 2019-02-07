import { Injectable } from '@angular/core';
import { ClickHandler } from '../rendering-engine/click-dispatcher.service';
import { DisplayFlagsService } from '../display-flags.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenkereignisClickHandlerService implements ClickHandler {

  private _lastClicked$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _displayFlags: DisplayFlagsService) { }

  onClick(element: any): void {
    this._lastClicked$.next(element);
    this._displayFlags.showHideLenkereignisInfo(true);
  }

  onFollowingClick(element: any): void {
    this.onClick(element);
  }

  teardown(): void {
    this._lastClicked$.next(null);
    this._displayFlags.showHideLenkereignisInfo(false);
  }

  isPropagatingSelection(): boolean {
    return false;
  }

  public get lastClicked(): Observable<any> {
    return this._lastClicked$.asObservable();
  }
}
