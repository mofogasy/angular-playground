import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c/c.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CComponent}
    ]),
  ]
})
export class CModule { }
