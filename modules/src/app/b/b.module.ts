import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b/b.component';
import { AModule } from '../a/a.module';

@NgModule({
  declarations: [BComponent],
  imports: [
    CommonModule,
    AModule
  ],
  exports: [
    BComponent
  ]
})
export class BModule { }
