import { Injectable } from '@angular/core';
import {Formdetail} from '../Modules/formdetails/formdetails.module';

@Injectable()
export class AuthService {

  users: Formdetail[];

  constructor() {
    this.users = [];
  }



  Add(form: Formdetail): number {

    if (this.users.push(form)) {
      return 1;
    }
    return 0;
  }

  Search(form: Formdetail): number {

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username.toString() === form.username && this.users[i].password === form.password) {
        return 1;
      }
    }
    return 0;
  }

  display(){
    for(let i =0;i<this.users.length;i++){
      console.log(this.users[i].username);
    }
  }
}
