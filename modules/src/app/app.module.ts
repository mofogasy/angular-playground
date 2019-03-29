import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BModule } from './b/b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'component-c', loadChildren: './c/c.module#CModule'}
    ]),
    BModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
