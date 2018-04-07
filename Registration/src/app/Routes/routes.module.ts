import {CanActivate, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {Component} from '@angular/core';
import {RegisteredComponent} from '../registered/registered.component';
import {SignupComponent} from '../signup/signup.component';
import {AuthguardService} from '../authgaud';


export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent },
  {path: 'login/form', component : LoginFormComponent },
  {path: 'login/form/confirm/:username', component: RegisteredComponent, canActivate: [AuthguardService]}
];
