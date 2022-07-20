import { Component, OnInit } from '@angular/core';
import { AuthServes } from 'src/app/service/auth.serves';
import { StorageServes } from 'src/app/service/storage.serves';
import { Router } from '@angular/router'
import { User } from '@core/models/user';
import { ProfileServes } from './profile.serves';
import { Order } from '@core/models/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const DELETE_ORDER_URL = "http://localhost:8080/api/order/"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: User;
  orders: Order[];
  isLoggedIn = false;

  constructor(private auth: AuthServes, private store: StorageServes, private profileServes: ProfileServes, private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    if (this.store.isLoggedIn()) {
      this.isLoggedIn = true;
      this.auth.getAccountInfoByProfile(this.store.getUser().email).subscribe(
        data => {
          this.profile = data;
        });
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  public refreshOrder(): void {
    this.profileServes.getOrders(this.profile.email).subscribe(
      data => {
        this.orders = data;
      });
  }

  isAdmin(): boolean {
    var flag = false;
    for(let i of this.profile.roles) {
      if (i == "ADMIN") {
        flag = true;
      }
    }
    return flag;
  }

  deleteOrder(id:number) {
    let user = this.store.getUser();
    let token = this.store.getToken(user);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', "Bearer "+token);
    this.orders = this.orders.filter(function(el) { return el.idOrder != id; });
    this.http.delete(DELETE_ORDER_URL+id, {headers}).subscribe();
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  logout(): void {
    this.store.signOut();
    window.location.reload();
  }

}
