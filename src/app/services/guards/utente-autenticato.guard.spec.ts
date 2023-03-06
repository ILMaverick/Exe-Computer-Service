import { TestBed } from '@angular/core/testing';

import { UtenteAutenticatoGuard } from './utente-autenticato.guard';

describe('UtenteAutenticatoGuard', () => {
  let guard: UtenteAutenticatoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UtenteAutenticatoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
