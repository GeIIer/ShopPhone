import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumberSymbol } from '@angular/common';

const AUTH_API = 'http://localhost:8080/api/services/controller/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthServes {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log(email, password, AUTH_API + "/login");
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
}
