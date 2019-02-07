import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayFlagsService {

  private _showSpeed = false;
  private _showMobInfo = false;
  private _showLenkereignisInfo = false;
  private _showProduktionsvorgaben = false;

  get showSpeed(): boolean {
    return this._showSpeed;
  }

  get showProduktionsvorgaben(): boolean {
    return this._showProduktionsvorgaben;
  }

  get showLenkereignisInfo(): boolean {
    return this._showLenkereignisInfo;
  }

  get showMobInfo(): boolean {
    return this._showMobInfo;
  }

  showHideMobInfo(force?: boolean) {
    this._showSpeed = force !== undefined ? force : !this._showSpeed;
    this._showMobInfo = force !== undefined ? force : !this._showMobInfo;
    this._showLenkereignisInfo = false;
    this._showProduktionsvorgaben = false;
  }

  showHideLenkereignisInfo() {
    this._showSpeed = false;
    this._showMobInfo = false;
    this._showLenkereignisInfo = !this._showLenkereignisInfo;
    this._showProduktionsvorgaben = false;
  }

  showHideProduktionsvorgaben() {
    this._showSpeed = false;
    this._showMobInfo = false;
    this._showLenkereignisInfo = false;
    this._showProduktionsvorgaben = !this._showProduktionsvorgaben;
  }
}
