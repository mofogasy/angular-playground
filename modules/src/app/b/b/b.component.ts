import { Component, OnInit } from '@angular/core';
import { AService } from '../../a/a.service';
import { CService } from '../../c/c.service';
import { Optional } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  public id: number;
  public isCServiceSet: boolean;

  constructor(private _aService: AService, @Optional() private _cService: CService) {
    this.id = this._aService.id;
    this.isCServiceSet = !!this._cService;
  }

  ngOnInit() {
  }

}
