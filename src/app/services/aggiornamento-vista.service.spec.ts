import { TestBed } from '@angular/core/testing';

import { AggiornamentoVistaService } from './aggiornamento-vista.service';

describe('AggiornamentoVistaService', () => {
  let service: AggiornamentoVistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggiornamentoVistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
