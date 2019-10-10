import { Component, Host, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { VALUE, ValueService } from '../value.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
  providers: [
    ValueService,
    {provide: VALUE, useValue: 'CComponent'}
  ]
})
export class CComponent implements OnInit {

  /*
   * Without resolution modifier or with @Host() or @Self, VALUE will be 'CComponent'
   */
  constructor(/*@Host() or @Self()*/ private valueService: ValueService) { }

  /*
   * With @SkipSelf, VALUE will be 'AComponent'
   */
  // constructor(@SkipSelf() private valueService: ValueService) { }

  /*
   * With @Host and @SkipSelf, error will be thrown (unless @Optional is added)
   */
  // constructor(@Optional() @Host() @SkipSelf() private valueService: ValueService) { }

  ngOnInit() {
  }

}
