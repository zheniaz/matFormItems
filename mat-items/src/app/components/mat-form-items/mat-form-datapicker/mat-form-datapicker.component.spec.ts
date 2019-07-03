import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormDatapickerComponent } from './mat-form-datapicker.component';

describe('MatFormDatapickerComponent', () => {
  let component: MatFormDatapickerComponent;
  let fixture: ComponentFixture<MatFormDatapickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormDatapickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormDatapickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
