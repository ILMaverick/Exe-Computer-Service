import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaServiziComponent } from './pagina-servizi.component';

describe('PaginaServiziComponent', () => {
  let component: PaginaServiziComponent;
  let fixture: ComponentFixture<PaginaServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaServiziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaServiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
