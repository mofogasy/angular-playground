import { TestBed, inject } from '@angular/core/testing';

import { ChuckNorrisQuoteService } from './chuck-norris-quote.service';

describe('ChuckNorrisQuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckNorrisQuoteService]
    });
  });

  it('should be created', inject([ChuckNorrisQuoteService], (service: ChuckNorrisQuoteService) => {
    expect(service).toBeTruthy();
  }));
});
