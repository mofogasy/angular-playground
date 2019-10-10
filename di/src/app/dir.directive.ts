import { Directive, Host, SkipSelf } from '@angular/core';
import { VALUE, ValueService } from './value.service';

@Directive({
  selector: '[appDir]',
  providers: [
    ValueService,
    {provide: VALUE, useValue: 'DirDirective'}
  ]
})
export class DirDirective {

  /*
   * Works
   */
  // constructor(/*@Host() or @Self()*/ private valueService: ValueService) { }

  /*
   * Works
   */
  // constructor(@SkipSelf() private valueService: ValueService) { }

  /*
   * Error will be thrown, unless @Optional is added
   */
  // constructor(@Host() @SkipSelf() private valueService: ValueService) { }

}
