import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public title = 'Famous Quotes';
  public quote?: Quote;
  private _destroy$ = new Subject<void>();

  constructor(private _httpClient: HttpClient) {
    this.installQuoteLoader();
  }

  private installQuoteLoader(): void {
    interval(10000).pipe(
      switchMap(() => this._httpClient.get<Quote>('https://api.quotable.io/random')),
      takeUntil(this._destroy$),
    ).subscribe((quote: Quote) => this.quote = quote);
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
  }
}

interface Quote {
  author: string;
  content: string;
  tags: string[];
}
