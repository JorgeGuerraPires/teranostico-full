import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormidComponent } from './formid.component';

describe('FormidComponent', () => {
  let component: FormidComponent;
  let fixture: ComponentFixture<FormidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
