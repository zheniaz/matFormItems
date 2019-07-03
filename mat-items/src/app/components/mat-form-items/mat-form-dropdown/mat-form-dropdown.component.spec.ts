import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormDropdownComponent } from './mat-form-dropdown.component';

describe('MatFormDropdownComponent', () => {
  let component: MatFormDropdownComponent;
  let fixture: ComponentFixture<MatFormDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
