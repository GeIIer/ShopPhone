import { Component } from '@angular/core';
import { AuthServes } from './service/auth.serves';
import { StorageServes } from './service/storage.serves';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShopPhone';

  private roles: string[] = [];
  isLoggedIn:boolean = false;
  username?: string;

  constructor(private storageService: StorageServes, private authService: AuthServes) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }
}
