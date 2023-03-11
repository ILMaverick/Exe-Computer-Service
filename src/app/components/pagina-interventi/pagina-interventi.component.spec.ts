import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInterventiComponent } from './pagina-interventi.component';

describe('PaginaInterventiComponent', () => {
  let component: PaginaInterventiComponent;
  let fixture: ComponentFixture<PaginaInterventiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInterventiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInterventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
