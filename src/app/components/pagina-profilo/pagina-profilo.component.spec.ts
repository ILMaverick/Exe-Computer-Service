import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProfiloComponent } from './pagina-profilo.component';

describe('PaginaProfiloComponent', () => {
  let component: PaginaProfiloComponent;
  let fixture: ComponentFixture<PaginaProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaProfiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
