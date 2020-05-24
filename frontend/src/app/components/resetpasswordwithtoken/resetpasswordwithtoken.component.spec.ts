import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordwithtokenComponent } from './resetpasswordwithtoken.component';

describe('ResetpasswordwithtokenComponent', () => {
  let component: ResetpasswordwithtokenComponent;
  let fixture: ComponentFixture<ResetpasswordwithtokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpasswordwithtokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordwithtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
