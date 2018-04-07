import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  login() {
    this.auth.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then((user) =>
         this.router.navigate(['/login/form/confirm', user.email])

    );
  }

}
