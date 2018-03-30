import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Formdetail} from '../Modules/formdetails/formdetails.module';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  form: Formdetail;
  confirm: number;

  constructor(private auth : AuthService, private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'Username': new FormControl( null, Validators.required),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null, [Validators.required])
    });

  }

  onSubmit() {

      console.log(this.loginForm.getRawValue());
      this.form = {username: this.loginForm.get('Username').value, password: this.loginForm.get('Password').value};
      //Search();;
      this.confirm = this.auth.Search(this.form);
      if(this.confirm === 1)
        this.route.navigate(['confirm']);
      this.loginForm.reset({
        'Username': ''
      });
      //this.loginForm.touched;
    this.auth.display();
  }

}
