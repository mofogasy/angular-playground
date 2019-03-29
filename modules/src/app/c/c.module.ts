import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c/c.component';
import { RouterModule } from '@angular/router';
import { CApiModule } from './c-api.module';

@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CComponent}
    ]),
    CApiModule
  ]
})
export class CModule { }
