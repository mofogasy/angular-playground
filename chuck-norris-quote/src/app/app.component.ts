import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quote = 'Click the button to load a random quote!';

  constructor(private http: HttpClient) {
  }

  getRandomQuote(): void {
    this.http.get<any>('http://api.icndb.com/jokes/random').subscribe(result => this.quote = result.value.joke);
  }
}
