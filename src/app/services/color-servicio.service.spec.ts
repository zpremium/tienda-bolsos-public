import { TestBed } from '@angular/core/testing';

import { ColorServicioService } from './color-servicio.service';

describe('ColorServicioService', () => {
  let service: ColorServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
