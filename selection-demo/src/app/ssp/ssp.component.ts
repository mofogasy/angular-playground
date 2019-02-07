import { Component, ElementRef, ViewChild } from '@angular/core';
import { RenderingEngineService } from '../rendering-engine/rendering-engine.service';

@Component({
  selector: 'app-ssp',
  templateUrl: './ssp.component.html',
  styleUrls: ['./ssp.component.scss']
})
export class SspComponent {

  @ViewChild('ssp')
  private set _canvas(elementRef: ElementRef) {
    this._renderingEngine.canvas = elementRef.nativeElement;
  }

  constructor(private _renderingEngine: RenderingEngineService) {
  }

}
