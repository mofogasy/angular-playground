import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisQuoteService {

  constructor(private http: HttpClient) {
  }

  getRandomQuote(): Observable<string> {
    return this.http.get<any>('http://api.icndb.com/jokes/random').pipe(pluck('value', 'joke'));
  }
}
