import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'Username': new FormControl(null, Validators.required),
      'Email': new FormControl(null,[Validators.required,Validators.email]),
      'Password': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
