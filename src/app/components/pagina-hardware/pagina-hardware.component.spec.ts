import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHardwareComponent } from './pagina-hardware.component';

describe('PaginaHardwareComponent', () => {
  let component: PaginaHardwareComponent;
  let fixture: ComponentFixture<PaginaHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
