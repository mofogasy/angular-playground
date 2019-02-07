import { Component } from '@angular/core';
import { MobRendererService } from './mob/mob-renderer.service';
import { DisplayFlagsService } from './display-flags.service';
import { ProduktionsvorgabeRendererService } from './produktionsvorgabe/produktionsvorgabe-renderer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Inject here to trigger DI
  constructor(private _mobRenderer: MobRendererService,
              private _pvRenderer: ProduktionsvorgabeRendererService,
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
}
