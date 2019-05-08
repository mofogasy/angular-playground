import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { RenderingEngineService } from '../rendering-engine/rendering-engine.service';

declare const Zone: any;

@Component({
  selector: 'app-ssp',
  templateUrl: './ssp.component.html',
  styleUrls: ['./ssp.component.scss']
})
export class SspComponent implements DoCheck {

  @ViewChild('ssp')
  private set _canvas(elementRef: ElementRef) {
    this._renderingEngine.canvas = elementRef.nativeElement;
  }

  constructor(private _renderingEngine: RenderingEngineService) {
  }

  public ngDoCheck(): void {
    // see https://stackoverflow.com/questions/43149097/how-can-you-identify-whats-triggering-round-of-change-detection-detection-in-an
    console.log('***************************** doCheck in ssp *****************************', Zone.currentTask.source);
  }

}
