import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormActionComponent } from './mat-form-action.component';

describe('MatFormActionComponent', () => {
  let component: MatFormActionComponent;
  let fixture: ComponentFixture<MatFormActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
