import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendsamplesComponent } from './sendsamples.component';

describe('SendsamplesComponent', () => {
  let component: SendsamplesComponent;
  let fixture: ComponentFixture<SendsamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendsamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendsamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
