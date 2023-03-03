import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistrazioneComponent } from './pagina-registrazione.component';

describe('PaginaRegistrazioneComponent', () => {
  let component: PaginaRegistrazioneComponent;
  let fixture: ComponentFixture<PaginaRegistrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRegistrazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRegistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
