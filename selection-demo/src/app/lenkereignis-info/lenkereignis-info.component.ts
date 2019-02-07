import { Component, OnInit } from '@angular/core';
import { LenkereignisService } from './lenkereignis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lenkereignis-info',
  templateUrl: './lenkereignis-info.component.html',
  styleUrls: ['./lenkereignis-info.component.scss']
})
export class LenkereignisInfoComponent implements OnInit {
  public leInfo: Observable<any>;

  constructor(private _leService: LenkereignisService) {
    this.leInfo = this._leService.leInfo;
  }

  ngOnInit() {
  }

}
