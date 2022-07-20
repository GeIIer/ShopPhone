import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServes } from 'src/app/service/auth.serves';
import { StorageServes } from 'src/app/service/storage.serves';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private auth: AuthServes, private storage: StorageServes, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(): void {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    } = this.form;

    this.auth.register(firstName, lastName, email, phoneNumber, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

