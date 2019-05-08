import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Normally, this class would receive data from a source, e.g. MQTT and dispatch it to the subscribed
 * handlers. For simplicity the handlers just subscribe to the different subjects directly. In a real
 * implementation, the MessageDispatcherService should not know the different topics / subjects but rather
 * subscribe to them dynamically.
 */
@Injectable({
  providedIn: 'root'
})
export class MessageDispatcherService implements OnDestroy {
  private _mobs$: Subject<any> = new Subject();
  private _mobInfo$: Subject<any> = new Subject();
  private _speed$: Subject<any> = new Subject();
  private _lenkereignis$: Subject<any> = new Subject();
  private readonly _intervalId: number;
  private _leIntervalId: number;
  private _mob1Wrapper = {mob: {id: 'mob1', x: 10, y: 10, w: 25, h: 25, s: 0}, right: true, down: true};
  private _mob2Wrapper = {mob: {id: 'mob2', x: 500, y: 330, w: 25, h: 25, s: 0}, right: false, down: false};
  private _selectedMobId: string;

  constructor(private _ngZone: NgZone) {
    this._ngZone.runOutsideAngular(() => setInterval(() => this.moveMobs(), 100));
    this._mobs$.next(this._mob1Wrapper.mob);
    this._mobs$.next(this._mob2Wrapper.mob);
    this._mobs$.subscribe(this._mobInfo$);
  }

  ngOnDestroy(): void {
    clearInterval(this._intervalId);
    clearInterval(this._leIntervalId);
  }

  private moveMobs(): void {
    this._mob1Wrapper = this.moveMob(this._mob1Wrapper);
    this._mob2Wrapper = this.moveMob(this._mob2Wrapper);
  }

  private moveMob(mobWrapper: any): any {
    mobWrapper = moveObject(mobWrapper.mob, mobWrapper.right, mobWrapper.down);
    mobWrapper.mob.s = Math.floor(Math.random() * 100);

    const mob = Object.assign({}, mobWrapper.mob); // Simulate a new object, otherwise reference is used in handlers

    this._ngZone.run(() => {
      this._speed$.next({mobId: mob.id, s: mob.s});
      this._mobs$.next(mob);
    });

    return mobWrapper;
  }

  get mobs(): Observable<any> {
    return this._mobs$.asObservable();
  }

  get mobInfo(): Observable<any> {
    return this._mobInfo$.asObservable().pipe(
      filter(mob => !mob || mob.id === this._selectedMobId)
    );
  }

  get speed(): Observable<any> {
    return this._speed$.asObservable();
  }

  get lenkereignis(): Observable<any> {
    return this._lenkereignis$.asObservable();
  }

  subscribeToMobInfo(id: string): void {
    this._selectedMobId = id;
  }

  unsubscribeFromMobInfo() {
    this._selectedMobId = null;
  }

  subscribeToLenkereignis(id: string): any[] {
    const color = id === 'mob1' ? '#f4bc42' : '#41bbf4';
    const leList = generateLenkereignis(color);

    this._ngZone.runOutsideAngular(() => {
      this._leIntervalId = setInterval(() => this._ngZone.run(() => this._lenkereignis$.next(updateLenkereignisse(leList)))
        , 2000);
    });

    return leList;
  }

  unsubscribeFromLenkereignis(): void {
    clearInterval(this._leIntervalId);
    this._lenkereignis$.next(null);
  }
}

function generateLenkereignis(c: string): any[] {
  const leList = [];
  for (let i = 0; i < 10; i++) {
    const x = Math.floor(Math.random() * 790);
    const y = Math.floor(Math.random() * 390);
    leList.push({id: `le${i}`, x, y, w: 10, h: 10, c});
  }
  return leList;
}

function updateLenkereignisse(leList: any[]): any[] {
  leList.forEach(le => le.c = getRandomColor());
  return leList;
}

function getRandomColor(): string {
  const rand = Math.random();

  if (rand <= 0.25) {
    return '#f4bc42';
  } else if (rand <= 0.5) {
    return '#41bbf4';
  } else if (rand <= 0.75) {
    return '#fc3753';
  }
  return '#63ff47';
}

function moveObject(mob: any, right: boolean, down: boolean): any {
  if (right) {
    if (mob.x + mob.w + 1 <= 800) {
      mob.x += 1;
    } else {
      right = false;
      mob.x = 775;
    }
  } else {
    if (mob.x - 1 >= 0) {
      mob.x -= 1;
    } else {
      right = true;
      mob.x = 0;
    }
  }
  if (down) {
    if (mob.y + mob.h + 1 <= 400) {
      mob.y += 1;
    } else {
      down = false;
      mob.y = 375;
    }
  } else {
    if (mob.y - 1 >= 0) {
      mob.y -= 1;
    } else {
      down = true;
      mob.y = 0;
    }
  }

  return {mob, right, down};
}
