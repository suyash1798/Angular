import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'Username': new FormControl(null, Validators.required),
      'Email': new FormControl(null,[Validators.required, Validators.email]),
      'Password': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.loginForm.reset();
    this.loginForm.get('Username').untouched;
  }

}
