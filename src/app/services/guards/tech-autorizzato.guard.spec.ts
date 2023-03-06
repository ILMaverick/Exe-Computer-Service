import { TestBed } from '@angular/core/testing';

import { TechAutorizzatoGuard } from './tech-autorizzato.guard';

describe('TechAutorizzatoGuard', () => {
  let guard: TechAutorizzatoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TechAutorizzatoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
