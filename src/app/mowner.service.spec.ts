import { TestBed, inject } from '@angular/core/testing';

import { MownerService } from './mowner.service';

describe('MownerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MownerService]
    });
  });

  it('should be created', inject([MownerService], (service: MownerService) => {
    expect(service).toBeTruthy();
  }));
});
