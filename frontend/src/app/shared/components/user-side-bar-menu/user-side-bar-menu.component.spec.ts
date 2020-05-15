import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideBarMenuComponent } from './user-side-bar-menu.component';

describe('UserSideBarMenuComponent', () => {
  let component: UserSideBarMenuComponent;
  let fixture: ComponentFixture<UserSideBarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSideBarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSideBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
