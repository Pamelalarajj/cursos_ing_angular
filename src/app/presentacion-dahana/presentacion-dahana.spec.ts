import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionDahana } from './presentacion-dahana';

describe('PresentacionDahana', () => {
  let component: PresentacionDahana;
  let fixture: ComponentFixture<PresentacionDahana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionDahana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionDahana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});