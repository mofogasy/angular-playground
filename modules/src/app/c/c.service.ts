import { Injectable } from '@angular/core';
import { CApiModule } from './c-api.module';

@Injectable({
  // providedIn: 'root'  // will be included in main bundle instead of lazy loaded chunk

  // https://www.softwarearchitekt.at/post/2018/05/06/the-new-treeshakable-providers-api-in-angular-why-how-and-cycles.aspx
  providedIn: CApiModule  // will be included in chunk and not available in other modules
})
export class CService {

  constructor() { }
}
