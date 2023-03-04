import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistrazioneEffettuataComponent } from './pagina-registrazione-effettuata.component';

describe('PaginaRegistrazioneEffettuataComponent', () => {
  let component: PaginaRegistrazioneEffettuataComponent;
  let fixture: ComponentFixture<PaginaRegistrazioneEffettuataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRegistrazioneEffettuataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRegistrazioneEffettuataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
