import { Injectable } from '@angular/core';
import { LenkereignisService } from './lenkereignis.service';
import { RenderingEngineService } from '../rendering-engine/rendering-engine.service';

@Injectable({
  providedIn: 'root'
})
export class LenkereignisRendererService {

  constructor(private _leService: LenkereignisService, private _renderingEngine: RenderingEngineService) {
    this._leService.le.subscribe(lenkereignisse => {
      this._renderingEngine.removeElements('le');
      if (lenkereignisse) {
        this._renderingEngine.addElements(lenkereignisse);
      }
    });
  }
}
