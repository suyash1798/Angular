import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  logininfb() {
    return this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logingoogle() {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  login(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
   return this.auth.auth.signOut();
  }

  signup(email, password) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

  status() {
    return this.auth.authState;
  }
}
