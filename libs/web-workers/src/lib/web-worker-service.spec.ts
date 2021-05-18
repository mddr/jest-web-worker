import { TestBed } from '@angular/core/testing';

import { WebWorkerService } from './web-worker.service';

describe('WebWorkerService', () => {
  let service: WebWorkerService;

  beforeEach(() => {
    service = TestBed.inject(WebWorkerService);
  });

  it('should create', function () {
    expect(service).toBeTruthy();
  });
});
