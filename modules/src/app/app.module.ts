import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BModule } from './b/b.module';
import { CModule } from './c/c.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BModule,
    CModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
