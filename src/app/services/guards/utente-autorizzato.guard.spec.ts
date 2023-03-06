import { TestBed } from '@angular/core/testing';

import { UtenteAutorizzatoGuard } from './utente-autorizzato.guard';

describe('UtenteAutorizzatoGuard', () => {
  let guard: UtenteAutorizzatoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UtenteAutorizzatoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
