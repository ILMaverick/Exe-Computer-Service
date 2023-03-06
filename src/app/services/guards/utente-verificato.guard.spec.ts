import { TestBed } from '@angular/core/testing';

import { UtenteVerificatoGuard } from './utente-verificato.guard';

describe('UtenteVerificatoGuard', () => {
  let guard: UtenteVerificatoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UtenteVerificatoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
