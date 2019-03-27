import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c/c.component';
import { AModule } from '../a/a.module';

@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    // AModule
  ],
  exports: [
    CComponent
  ]
})
export class CModule { }
