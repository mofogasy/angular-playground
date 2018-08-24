import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WorkerAppModule} from '@angular/platform-webworker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
