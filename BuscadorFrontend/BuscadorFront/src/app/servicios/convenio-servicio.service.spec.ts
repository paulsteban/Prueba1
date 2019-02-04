import { TestBed } from '@angular/core/testing';

import { ConvenioServicioService } from './convenio-servicio.service';

describe('ConvenioServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvenioServicioService = TestBed.get(ConvenioServicioService);
    expect(service).toBeTruthy();
  });
});
