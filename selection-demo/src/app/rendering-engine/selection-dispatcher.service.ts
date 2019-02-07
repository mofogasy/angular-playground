import { Injectable } from '@angular/core';
import { MobSelectionHandlerService } from '../mob/mob-selection-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SelectionDispatcherService {

  private _lastSelectionHandler: SelectionHandler;

  constructor(private _mobSelectionHandler: MobSelectionHandlerService) { }

  onSelect(element: any) {
    let nextSelectionHandler: SelectionHandler;

    if (element === undefined || element === null) {
      nextSelectionHandler = null;
    } else if (element.id.startsWith('mob')) {
      nextSelectionHandler = this._mobSelectionHandler;
    }

    // same kind of element is selected, it could potentially be the same, let the handler decide what to do
    if (nextSelectionHandler && nextSelectionHandler === this._lastSelectionHandler) {
      this._lastSelectionHandler.onFollowingSelect(element);
    } else {
      if (this._lastSelectionHandler) {
        this._lastSelectionHandler.teardown();
      }
      if (nextSelectionHandler) {
        nextSelectionHandler.onSelect(element);
      }
      this._lastSelectionHandler = nextSelectionHandler;
    }


  }
}

export interface SelectionHandler {
  onSelect(element: any): void;
  onFollowingSelect(element: any): void;
  teardown(): void;
}
