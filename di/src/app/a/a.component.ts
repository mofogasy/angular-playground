import { Component, Host, OnInit, SkipSelf } from '@angular/core';
import { VALUE, ValueService } from '../value.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  providers: [
    ValueService,
    {provide: VALUE, useValue: 'AComponent'}
  ]
})
export class AComponent implements OnInit {

  /*
   * Without resolution modifier or with @Host, VALUE will be 'AComponent'
   */
  // constructor(/*@Host()*/ private valueService: ValueService) { }

  /*
   * With @SkipSelf, VALUE will be 'AppModule'
   */
  constructor(@SkipSelf() private valueService: ValueService) { }

  /*
   * This will fail, because it cannot lookup further up
   */
  // constructor(@Host() @SkipSelf() private valueService: ValueService) { }

  ngOnInit() {
  }

}
