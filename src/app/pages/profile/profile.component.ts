import { Component, OnInit } from '@angular/core';
import { AuthServes } from 'src/app/service/auth.serves';
import { StorageServes } from 'src/app/service/storage.serves';
import { Router } from '@angular/router'
import { User } from '@core/models/user';
import { ProfileServes } from './profile.serves';
import { Order } from '@core/models/order';
import { IGridColumn } from 'src/app/shared/grid/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: User;
  orders: Order[];

  constructor(private auth: AuthServes, private store: StorageServes, private profileServes: ProfileServes, private router: Router) { }

  ngOnInit(): void {
    this.auth.getAccountInfoByProfile(this.store.getUser().email).subscribe(
      data => {
        this.profile = data;
      });
  }

  refreshOrder(): void {
    this.profileServes.getOrders(this.profile.email).subscribe(
      data => {
        this.orders = data;
      });
  }

  logout(): void {
    this.store.signOut();
    window.location.reload();
    this.goToLogin();
  }

  goToLogin() {
    this.router.navigate(['/home']);
  }
}
