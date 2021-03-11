import { HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [InterceptorService]
  }));

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });

  it('should be tun intercept', () => {
    const myToken = '5cf9dfd5-3449-485e-b5ae-70a60e997864';
    const req = new HttpRequest('GET', 'url')
    const next: any = {
      handle: (request: HttpRequest<any>) => {
        expect(request.headers.has('x-access-token')).toBeTruthy();
        expect(request.headers.get('x-access-token')).toEqual(myToken);
      }
    };
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service.intercept(req, next)).toBeUndefined();
  });


});
