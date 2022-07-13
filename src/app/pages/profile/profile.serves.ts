import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '@core/models/order';
import { StorageServes } from 'src/app/service/storage.serves';

const getOrders = 'http://localhost:8080/api/orders';

@Injectable({
  providedIn: 'root'
})
export class ProfileServes {

  constructor(private storage: StorageServes, private http:HttpClient) { }

  getOrders(email:string) {
    let user = this.storage.getUser();
    let token = this.storage.getToken(user);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', "Bearer "+token);
    return  this.http.get<Order[]>(getOrders+"?email="+email, {headers});
  }

}
