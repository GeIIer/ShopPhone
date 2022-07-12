import { Component, OnInit } from '@angular/core';
import { AuthServes } from 'src/app/service/auth.serves';
import { StorageServes } from 'src/app/service/storage.serves';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private auth: AuthServes, private store: StorageServes, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.store.getUser();
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
