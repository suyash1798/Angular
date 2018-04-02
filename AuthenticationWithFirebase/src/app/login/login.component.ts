import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      Username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });


  }


  login() {
    this.auth.signin(this.loginform.get('Username').value.toString(), this.loginform.get('Password').value.toString());
  }
}
