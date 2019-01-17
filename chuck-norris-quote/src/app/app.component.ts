import { Component } from '@angular/core';
import { ChuckNorrisQuoteService } from './chuck-norris-quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quote = 'Click the button to load a random quote!';

  constructor(private chuckNorrisQuote: ChuckNorrisQuoteService) {
  }

  getRandomQuote(): void {
    this.chuckNorrisQuote.getRandomQuote().subscribe(quote => this.quote = quote);
  }
}
