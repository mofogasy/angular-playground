import { Injectable } from '@angular/core';
import { RenderingEngineService } from '../rendering-engine/rendering-engine.service';
import { MobService } from './mob.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobRendererService {

  constructor(private _renderingEngine: RenderingEngineService,
              private _mobService: MobService) {
    this._mobService.mobs
      .pipe(map(mob => {
        if (this._mobService.selectedMobValue && mob.id === this._mobService.selectedMobValue.id) {
          mob.c = '#000';
        } else {
          mob.c = '#d50000';
        }
        return mob;
      }))
      .subscribe(mob => this._renderingEngine.addElement(mob));
  }
}
