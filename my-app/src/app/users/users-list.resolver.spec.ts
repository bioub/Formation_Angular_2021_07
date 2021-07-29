import { TestBed } from '@angular/core/testing';

import { UsersListResolver } from './users-list.resolver';

describe('UsersListResolver', () => {
  let resolver: UsersListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UsersListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
