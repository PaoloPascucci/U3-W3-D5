import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloPersComponent } from './profilo-pers.component';

describe('ProfiloPersComponent', () => {
  let component: ProfiloPersComponent;
  let fixture: ComponentFixture<ProfiloPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiloPersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiloPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
