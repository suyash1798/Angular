import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.signup = new FormGroup({
      Username : new FormControl(null, [Validators.required, Validators.email]),
      Password : new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  sign() {
    this.auth.signup(this.signup.get('Username').value.toString(), this.signup.get('Password').value.toString());
    //console.log(this.signup.getRawValue());
  }
}
