import { Component, DoCheck } from '@angular/core';
import { MobRendererService } from './mob/mob-renderer.service';
import { DisplayFlagsService } from './display-flags.service';
import { ProduktionsvorgabeRendererService } from './produktionsvorgabe/produktionsvorgabe-renderer.service';
import { LenkereignisRendererService } from './lenkereignis-info/lenkereignis-renderer.service';

declare const Zone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  // Inject here to trigger DI
  constructor(private _mobRenderer: MobRendererService,
              private _pvRenderer: ProduktionsvorgabeRendererService,
              private _leRenderer: LenkereignisRendererService,
              public displayFlags: DisplayFlagsService) {
  }

  showMobInfo() {
    this.displayFlags.showHideMobInfo();
  }

  showLenkereignisInfo() {
    this.displayFlags.showHideLenkereignisInfo();
  }

  showProduktionsvorgaben() {
    this.displayFlags.showHideProduktionsvorgaben();
  }

  public ngDoCheck(): void {
    // see https://stackoverflow.com/questions/43149097/how-can-you-identify-whats-triggering-round-of-change-detection-detection-in-an
    console.log('***************************** doCheck in app *****************************', Zone.currentTask.source);
  }
}
