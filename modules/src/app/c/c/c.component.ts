import { Component, OnInit } from '@angular/core';
import { AService } from '../../a/a.service';
import { CService } from '../c.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  public id: string;

  constructor(private _aService: AService, private _cService: CService) {
    this.id = this._aService.id + ' ' + !!this._cService;
  }

  ngOnInit() {
  }

}
