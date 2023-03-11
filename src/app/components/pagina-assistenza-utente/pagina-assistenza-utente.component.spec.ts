import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAssistenzaUtenteComponent } from './pagina-assistenza-utente.component';

describe('PaginaAssistenzaUtenteComponent', () => {
  let component: PaginaAssistenzaUtenteComponent;
  let fixture: ComponentFixture<PaginaAssistenzaUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAssistenzaUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAssistenzaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
