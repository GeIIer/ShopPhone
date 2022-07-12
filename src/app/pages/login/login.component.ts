import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServes } from '../../service/auth.serves';
import { StorageServes } from '../../service/storage.serves';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private auth: AuthServes, private storage: StorageServes, private router: Router) { }

  ngOnInit(): void {
    if (this.storage.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  signUp(): void {
    this.router.navigate(['/register']);
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.auth.login(email, password).subscribe(
      data => {;
        this.storage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      })
      this.router.navigate(['/profile']);
    };

  reloadPage(): void {
    window.location.reload();
  }
}
