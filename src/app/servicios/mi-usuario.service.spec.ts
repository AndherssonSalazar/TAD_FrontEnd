import { TestBed } from '@angular/core/testing';

import { MiUsuarioService } from './mi-usuario.service';

describe('MiUsuarioService', () => {
  let service: MiUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
