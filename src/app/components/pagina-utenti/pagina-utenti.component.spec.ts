import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUtentiComponent } from './pagina-utenti.component';

describe('PaginaUtentiComponent', () => {
  let component: PaginaUtentiComponent;
  let fixture: ComponentFixture<PaginaUtentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaUtentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
