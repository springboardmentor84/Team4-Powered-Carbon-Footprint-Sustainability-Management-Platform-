import { TestBed } from '@angular/core/testing';

import { Carbon } from './carbon';

describe('Carbon', () => {
  let service: Carbon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carbon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
