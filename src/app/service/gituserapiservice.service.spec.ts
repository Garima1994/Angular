import { TestBed } from '@angular/core/testing';

import {  GitUserApiService } from './gituserapiservice.service';

describe('GituserapiserviceService', () => {
  let service:  GitUserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( GitUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
