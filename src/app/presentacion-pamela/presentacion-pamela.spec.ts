import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentacionPamela } from './presentacion-pamela';

describe('PresentacionPamela', () => {
  let component: PresentacionPamela;
  let fixture: ComponentFixture<PresentacionPamela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionPamela],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentacionPamela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
