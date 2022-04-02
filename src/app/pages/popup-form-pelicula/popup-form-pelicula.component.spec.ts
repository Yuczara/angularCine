import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFormPeliculaComponent } from './popup-form-pelicula.component';

describe('PopupFormPeliculaComponent', () => {
  let component: PopupFormPeliculaComponent;
  let fixture: ComponentFixture<PopupFormPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFormPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFormPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
