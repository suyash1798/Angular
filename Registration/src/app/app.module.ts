import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './Routes/routes.module';
import { RegisteredComponent } from './registered/registered.component';
import {MatCardModule} from '@angular/material/card';
import {AuthService} from './auth.service';
import { SignupComponent } from './signup/signup.component';
import {AuthguardService} from './authgaud';




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginComponent,
    RegisteredComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireAuth, AuthService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
