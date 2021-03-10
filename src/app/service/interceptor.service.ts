import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myToken = '5cf9dfd5-3449-485e-b5ae-70a60e997864';
    const changedReq = req.clone({
      headers: req.headers.set('x-access-token', myToken)
    });
    changedReq.headers.append("Access-Control-Allow-Origin", "*");
    return next.handle(changedReq);
  }
}
