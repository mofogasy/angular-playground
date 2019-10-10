import { Component, Host, OnInit, Self, SkipSelf } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent implements OnInit {

  /*
   * Without resolution modifier or with @Host or @Self, VALUE will be 'DirDirective'
   */
  constructor(/*@Host() or @Self()*/ private valueService: ValueService) { }

  /*
   * With @SkipSelf, VALUE will be 'AComponent'
   */
  // constructor(@SkipSelf() private valueService: ValueService) { }

  ngOnInit() {
  }

}
