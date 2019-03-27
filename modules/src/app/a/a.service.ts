import { Injectable } from '@angular/core';
import { AModule } from './a.module';

@Injectable({
  providedIn: AModule
})
export class AService {

  public readonly id;

  constructor() {
    console.log('AService created');
    this.id = Math.random();
  }
}
