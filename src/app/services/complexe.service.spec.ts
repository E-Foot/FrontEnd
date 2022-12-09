import { TestBed } from '@angular/core/testing';

import { ComplexeService } from './complexe.service';

describe('ComplexeService', () => {
  let service: ComplexeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplexeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
