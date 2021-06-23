import { TestBed } from '@angular/core/testing';

import { CustomerAuthenticationGuard } from './customer-authentication.guard';

describe('CustomerAuthenticationGuard', () => {
  let guard: CustomerAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
