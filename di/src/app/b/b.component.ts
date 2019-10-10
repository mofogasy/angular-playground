import { Component, Host, OnInit, Self, SkipSelf } from '@angular/core';
import { VALUE, ValueService } from '../value.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  providers: [
    ValueService,
    {provide: VALUE, useValue: 'BComponent'}
  ]
})
export class BComponent implements OnInit {

  /*
   * Without resolution modifier or with @Host or @Self, VALUE will be 'BComponent'
   */
  // constructor(/*@Host() or @Self()*/ private valueService: ValueService) { }

  /*
   * With @SkipSelf, VALUE will be 'AComponent'
   */
  constructor(@SkipSelf() private valueService: ValueService) { }

  /*
   * With @Host and @SkipSelf, VALUE will be 'AComponent'
   */
  // constructor(@Host() @SkipSelf() private valueService: ValueService) { }

  ngOnInit() {
  }

}
