import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@core/models/user';
import { StorageServes } from './storage.serves';

const AUTH_API = 'http://localhost:8080/api/services/controller/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthServes {
  constructor(private storage: StorageServes, private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + "/login",
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string): Observable<any> {
    console.log(firstName, lastName, email, phoneNumber, password, AUTH_API + "/register");
    return this.http.post(
      AUTH_API + "/register",
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      },
      httpOptions
    );
  }

  getAccountInfoByProfile(email:string) {
    let user = this.storage.getUser();
    let token = this.storage.getToken(user);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', "Bearer "+token);
    return this.http.get<User>(AUTH_API + "/getUser?email="+email, {headers});
  }
}
