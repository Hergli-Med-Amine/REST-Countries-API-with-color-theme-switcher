import { TestBed } from '@angular/core/testing';

import { CountrieAPIService } from './countrie-api.service';

describe('CountrieAPIService', () => {
  let service: CountrieAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrieAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
