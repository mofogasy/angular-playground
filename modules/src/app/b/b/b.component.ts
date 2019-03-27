import { Component, OnInit } from '@angular/core';
import { AService } from '../../a/a.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  public id: number;

  constructor(private _aService: AService) {
    this.id = this._aService.id;
  }

  ngOnInit() {
  }

}
