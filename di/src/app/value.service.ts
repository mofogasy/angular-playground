import { Inject, Injectable, InjectionToken } from '@angular/core';

export const VALUE = new InjectionToken('value used in service');

@Injectable()
export class ValueService {

  constructor(@Inject(VALUE) public value: string) { }
}
