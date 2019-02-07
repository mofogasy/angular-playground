import { Component, OnInit } from '@angular/core';
import { ProduktionsvorgabeService } from './produktionsvorgabe.service';

@Component({
  selector: 'app-produktionsvorgabe',
  templateUrl: './produktionsvorgabe.component.html',
  styleUrls: ['./produktionsvorgabe.component.scss']
})
export class ProduktionsvorgabeComponent implements OnInit {

  constructor(private _pvService: ProduktionsvorgabeService) { }

  ngOnInit() {
  }

  onSelect(pv: string) {
    this._pvService.selectPv(pv);
  }
}
