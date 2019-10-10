import { Directive, ElementRef, Host, Optional, SkipSelf } from '@angular/core';
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
   *
   * Check the 3 different usages:
   *    - <span appDir>
   *    - <app-d appDir>
   *    - <div appDir>
   */
  constructor(@Optional() @Host() @SkipSelf() private valueService: ValueService,
              private elRef: ElementRef) {

    console.log(elRef.nativeElement.nodeName, valueService ? valueService.value : 'ValueService is null');
  }

}
