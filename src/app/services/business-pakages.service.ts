import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicePakage } from 'app/models/service-pakage.model';
import { Observable } from 'rxjs';
// import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';
import {​​​​​​​​ environment }​​​​​​​​ from '../../environments/environment.prod';
//`${​​​​​​​​environment.REQ_API}​​​​​​​​`
@Injectable({
  providedIn: 'root',
})
export class BusinessPakagesService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getPakages(id: string): Observable<any> {
    return this.http.get(`${​​​​​​​​environment.REQ_API}​​​​​​​​` + 'profile/business/package/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  addPackage(servicePackage: ServicePakage, id: string): Observable<any> {
    return this.http.post(
      `${​​​​​​​​environment.REQ_API}​​​​​​​​` + 'profile/business/' + id + '/package/add',
      JSON.stringify(servicePackage),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token.getToken(),
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  deletePackage(id: any): Observable<any> {
    return this.http.get(`${​​​​​​​​environment.REQ_API}​​​​​​​​` + 'profile/business/package/delete/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
}
