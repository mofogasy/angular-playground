import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { VALUE, ValueService } from './value.service';
import { DComponent } from './d/d.component';
import { DirDirective } from './dir.directive';
import { EComponent } from './e/e.component';
import { FComponent } from './f/f.component';

@NgModule({
  declarations: [
    AppComponent,
    DirDirective,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ValueService,
    {provide: VALUE, useValue: 'AppModule'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
