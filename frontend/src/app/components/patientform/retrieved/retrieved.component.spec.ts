import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievedComponent } from './retrieved.component';

describe('RetrievedComponent', () => {
  let component: RetrievedComponent;
  let fixture: ComponentFixture<RetrievedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
