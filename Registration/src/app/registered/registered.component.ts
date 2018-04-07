import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  fuck = 'fuck';
  username: string;
  constructor(private auth: AuthService, private Actrouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.Actrouter.paramMap.subscribe(
      (params) => {
        this.username = params.get('username');
      }
    );
  }
  Logout() {
    this.auth.logout().then(() => {
      this.router.navigateByUrl('/login');
      }
    );
  }

}
