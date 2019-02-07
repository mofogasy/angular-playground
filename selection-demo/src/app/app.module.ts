import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SspComponent } from './ssp/ssp.component';
import { SpeedInfoComponent } from './speed-info/speed-info.component';
import { MobInfoComponent } from './mob/mob-info/mob-info.component';
import { LenkereignisInfoComponent } from './lenkereignis-info/lenkereignis-info.component';
import { ProduktionsvorgabeComponent } from './produktionsvorgabe/produktionsvorgabe.component';

@NgModule({
  declarations: [
    AppComponent,
    SspComponent,
    SpeedInfoComponent,
    MobInfoComponent,
    LenkereignisInfoComponent,
    ProduktionsvorgabeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
