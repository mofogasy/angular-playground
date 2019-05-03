import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkbenchModule } from '@scion/workbench';
import { WorkbenchApplicationPlatformModule } from '@scion/workbench-application-platform';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WorkbenchModule.forRoot(),
    WorkbenchApplicationPlatformModule.forRoot({
      applicationConfig: [
        {
          symbolicName: 'contact-app',
          manifestUrl: 'http://localhost:4200/assets/manifest.json'
        },
        {
          symbolicName: 'communication-app',
          manifestUrl: 'https://scion-workbench-application-platform-communication.now.sh/assets/manifest.json'
        },
        {
          symbolicName: 'dev-tools-app',
          manifestUrl: 'https://scion-workbench-application-platform-devtools.now.sh/assets/manifest.json',
          scopeCheckDisabled: true
        }
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
