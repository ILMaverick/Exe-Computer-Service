import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContattiComponent } from './pagina-contatti.component';

describe('PaginaContattiComponent', () => {
  let component: PaginaContattiComponent;
  let fixture: ComponentFixture<PaginaContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaContattiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
