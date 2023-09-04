import { TestBed } from '@angular/core/testing';

import { PatrocinioService } from './patrocinio.service';

describe('PatrocinioService', () => {
  let service: PatrocinioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrocinioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
