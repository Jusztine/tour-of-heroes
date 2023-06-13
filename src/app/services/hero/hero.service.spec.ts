import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from '../message/message.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
