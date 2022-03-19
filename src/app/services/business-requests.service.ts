import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';
import {​​​​​​​​ environment }​​​​​​​​ from '../../environments/environment.prod';
//`${​​​​​​​​environment.REQ_API}​​​​​​​​`

@Injectable({
  providedIn: 'root'
})
export class BusinessRequestsService {

  constructor(private token:TokenStorageService ,private http:HttpClient ){}

  getRequests(): Observable<any> {
    return this.http.get(`${​​​​​​​​environment.REQ_API}​​​​​​​​` + 'business/request', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }

}
