import { TestBed } from '@angular/core/testing';

import { InfoNoticiasService } from './info-noticias.service';

describe('InfoNoticiasService', () => {
  let service: InfoNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
