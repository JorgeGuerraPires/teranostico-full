import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreivedComponent } from './retreived.component';

describe('RetreivedComponent', () => {
  let component: RetreivedComponent;
  let fixture: ComponentFixture<RetreivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetreivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetreivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
