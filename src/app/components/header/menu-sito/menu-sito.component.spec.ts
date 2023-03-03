import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSitoComponent } from './menu-sito.component';

describe('MenuSitoComponent', () => {
  let component: MenuSitoComponent;
  let fixture: ComponentFixture<MenuSitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
