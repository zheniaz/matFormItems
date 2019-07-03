import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormInputComponent } from './mat-form-input.component';

describe('MatFormInputComponent', () => {
  let component: MatFormInputComponent;
  let fixture: ComponentFixture<MatFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
