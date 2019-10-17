import { Component, Host, OnInit, Optional } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.scss']
})
export class FComponent implements OnInit {

  constructor(@Optional() @Host() private valueService: ValueService) { }

  ngOnInit() {
  }

}
