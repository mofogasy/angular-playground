import { Injectable } from '@angular/core';
import { RenderingEngineService } from '../rendering-engine/rendering-engine.service';
import { ProduktionsvorgabeService } from './produktionsvorgabe.service';

@Injectable({
  providedIn: 'root'
})
export class ProduktionsvorgabeRendererService {

  constructor(private _renderingEngine: RenderingEngineService,
              private _produktionsvorgabeService: ProduktionsvorgabeService) {

    this._produktionsvorgabeService.pv.subscribe(pv => {
      if (pv) {
        this._renderingEngine.addElement(pv);
      } else {
        this._renderingEngine.removeElement('line');
      }
    });
  }
}
