import { Injectable } from '@angular/core';
import { SelectionDispatcherService } from './selection-dispatcher.service';
import { MobClickHandlerService } from '../mob/mob-click-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ClickDispatcherService {

  private _lastClickHandler: ClickHandler;

  constructor(private _selectionDispatcher: SelectionDispatcherService,
              private _mobClickHandler: MobClickHandlerService) { }

  onClick(element: any) {
    let nextClickHandler: ClickHandler;

    if (element === undefined || element === null) {
      nextClickHandler = null;
    } else if (element.id.startsWith('mob')) {
      nextClickHandler = this._mobClickHandler;
    }

    // same kind of element is clicked, it could potentially be the same, let the handler decide what to do
    if (nextClickHandler && nextClickHandler === this._lastClickHandler) {
      this._lastClickHandler.onFollowingClick(element);
    } else {
      if (this._lastClickHandler) {
        this._lastClickHandler.teardown();
      }
      if (nextClickHandler) {
        nextClickHandler.onClick(element);
      }
      this._lastClickHandler = nextClickHandler;
    }

    this._selectionDispatcher.onSelect(element);
  }
}

export interface ClickHandler {
  onClick(element: any): void;
  onFollowingClick(element: any): void;
  teardown(): void;
}
