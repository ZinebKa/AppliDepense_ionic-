import { TestBed } from '@angular/core/testing';

import { DetteService } from './dette.service';

describe('DetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetteService = TestBed.get(DetteService);
    expect(service).toBeTruthy();
  });
});
