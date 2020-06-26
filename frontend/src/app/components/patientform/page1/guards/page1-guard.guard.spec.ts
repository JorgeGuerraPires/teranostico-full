import { TestBed, async, inject } from '@angular/core/testing';

import { Page1GuardGuard } from './page1-guard.guard';

describe('Page1GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page1GuardGuard]
    });
  });

  it('should ...', inject([Page1GuardGuard], (guard: Page1GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
