import { Component, OnInit } from '@angular/core';
import { AService } from '../../a/a.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  public id: number;

  constructor(private _aService: AService) {
    this.id = this._aService.id;
  }

  ngOnInit() {
  }

}
