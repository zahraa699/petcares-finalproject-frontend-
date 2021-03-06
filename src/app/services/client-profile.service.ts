import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientProfile } from 'app/models/client-profile.model';
import { Observable } from 'rxjs';
// import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';
import {​​​​​​​​ environment }​​​​​​​​ from '../../environments/environment.prod';
//`${​​​​​​​​environment.REQ_API}​​​​​​​​`
@Injectable({
  providedIn: 'root',
})
export class ClientProfileService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getProfile(): Observable<any> {
    return this.http.get(`${​​​​​​​​environment.REQ_API}​​​​​​​​` + 'profile/client', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  update(client: ClientProfile): Observable<any> {
    return this.http.post(`${​​​​​​​​environment.REQ_API}​​​​​​​​` + 'profile/client/edit', JSON.stringify(client), {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
}
