import { TestBed } from '@angular/core/testing';

import { dataService } from './service.service';

describe('ServiceService', () => {
  let service: dataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
