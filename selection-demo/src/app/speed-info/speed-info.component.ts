import { Component, OnDestroy } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SpeedService } from './speed.service';

@Component({
  selector: 'app-speed-info',
  templateUrl: './speed-info.component.html',
  styleUrls: ['./speed-info.component.scss']
})
export class SpeedInfoComponent implements OnDestroy {
  private _destroy$: Subject<any> = new Subject();
  public speed: any = null;

  constructor(private _speed: SpeedService) {
    this._speed.speed.pipe(
      tap(speed => console.log('speed', speed)),
      takeUntil(this._destroy$)
    ).subscribe(speed => this.speed = speed);
  }

  ngOnDestroy() {
    this._destroy$.next();
  }

}
