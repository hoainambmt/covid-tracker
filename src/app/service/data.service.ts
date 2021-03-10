import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../model/const/api.const';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected https: HttpClient) { }

  getSummary(): Observable<any> {
    const urlReq = `${API.BASEURL}${API.SUMMARY}`;
    return this.https.get(urlReq);
  }

}
