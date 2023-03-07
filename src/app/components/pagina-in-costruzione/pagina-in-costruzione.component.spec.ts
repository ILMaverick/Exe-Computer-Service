import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInCostruzioneComponent } from './pagina-in-costruzione.component';

describe('PaginaInCostruzioneComponent', () => {
  let component: PaginaInCostruzioneComponent;
  let fixture: ComponentFixture<PaginaInCostruzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInCostruzioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInCostruzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
