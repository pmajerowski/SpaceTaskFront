import { TestBed } from '@angular/core/testing';

import { JWTTokenServiceService } from './jwttoken-service.service';

describe('JWTTokenServiceService', () => {
  let service: JWTTokenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTTokenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
