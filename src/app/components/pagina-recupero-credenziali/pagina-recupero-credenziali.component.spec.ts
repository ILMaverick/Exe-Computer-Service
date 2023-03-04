import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRecuperoCredenzialiComponent } from './pagina-recupero-credenziali.component';

describe('RecuperoCredenzialiComponent', () => {
  let component: PaginaRecuperoCredenzialiComponent;
  let fixture: ComponentFixture<PaginaRecuperoCredenzialiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRecuperoCredenzialiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRecuperoCredenzialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
