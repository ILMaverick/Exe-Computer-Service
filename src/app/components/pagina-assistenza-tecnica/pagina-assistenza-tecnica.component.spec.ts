import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAssistenzaTecnicaComponent } from './pagina-assistenza-tecnica.component';

describe('PaginaAssistenzaTecnicaComponent', () => {
  let component: PaginaAssistenzaTecnicaComponent;
  let fixture: ComponentFixture<PaginaAssistenzaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAssistenzaTecnicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAssistenzaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
