import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MobService } from '../mob.service';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mob-info',
  templateUrl: './mob-info.component.html',
  styleUrls: ['./mob-info.component.scss']
})
export class MobInfoComponent implements OnDestroy {
  private _destroy$: Subject<any> = new Subject();
  public mob: any = null;

  constructor(private _mobService: MobService) {
    this._mobService.mobInfo
      .pipe(
        // tap(mob => console.log('mob info', mob)),
        takeUntil(this._destroy$)
      )
      .subscribe(mob => this.mob = mob);
  }

  ngOnDestroy() {
    this._destroy$.next();
  }

}
