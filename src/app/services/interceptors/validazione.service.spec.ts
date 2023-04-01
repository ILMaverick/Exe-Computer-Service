import { TestBed } from '@angular/core/testing';

import { ValidazioneService } from './validazione.service';

describe('ValidazioneService', () => {
  let service: ValidazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
