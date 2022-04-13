import { TestBed } from '@angular/core/testing';

import { HeroEditResolver } from './hero-edit.resolver';

describe('HeroEditResolver', () => {
  let resolver: HeroEditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeroEditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
