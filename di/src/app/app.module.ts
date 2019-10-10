import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { VALUE, ValueService } from './value.service';
import { DComponent } from './d/d.component';
import { DirDirective } from './dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    DirDirective
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
