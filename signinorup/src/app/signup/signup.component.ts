import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../Services/auth.service';
import {Formdetail} from '../Modules/formdetails/formdetails.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  form: Formdetail;
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'Username': new FormControl(null, Validators.required),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm);

    this.form = <Formdetail>{username: this.signupForm.get('Username').value, password: this.signupForm.get('Password').value};
      this.route.navigate(['login']);
      this.auth.Add(this.form);
      this.auth.display();
  }
}
