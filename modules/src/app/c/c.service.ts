import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // will be included in main bundle instead of lazy loaded chunk
})
export class CService {

  constructor() { }
}
