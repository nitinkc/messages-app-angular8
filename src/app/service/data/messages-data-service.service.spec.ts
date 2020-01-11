import { TestBed } from '@angular/core/testing';

import { MessagesDataServiceService } from './messages-data-service.service';

describe('MessagesDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesDataServiceService = TestBed.get(MessagesDataServiceService);
    expect(service).toBeTruthy();
  });
});
