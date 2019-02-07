import { Injectable } from '@angular/core';
import { ClickHandler } from '../rendering-engine/click-dispatcher.service';
import { DisplayFlagsService } from '../display-flags.service';

@Injectable({
  providedIn: 'root'
})
export class MobClickHandlerService implements ClickHandler {

  constructor(private _displayFlags: DisplayFlagsService) { }

  onClick(element: any): void {
    console.log('mob clicked');
    this._displayFlags.showHideMobInfo(true);
  }

  onFollowingClick(element: any): void {
    console.log('mob clicked again');
    this._displayFlags.showHideMobInfo(true);
  }

  teardown(): void {
    console.log('mob click teardown');
    this._displayFlags.showHideMobInfo(false);
  }

  isPropagatingSelection(): boolean {
    return true;
  }
}
