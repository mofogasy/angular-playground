import { Component } from '@angular/core';
import { VALUE, ValueService } from '../value.service';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss'],
  // providers: [
  //   ValueService,
  //   {provide: VALUE, useValue: 'EComponent'}
  // ],
  viewProviders: [
    ValueService,
    {provide: VALUE, useValue: 'EComponent (viewProviders)'}
  ]
})
export class EComponent {}
