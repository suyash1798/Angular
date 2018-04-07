import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
@Injectable()
export class AuthguardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.auth.status().subscribe(user => {
      if (user) {
        console.log('user');
        return true;
      } else {
        console.log('no user');
        this.router.navigate(['/login']);
        return false;
      }
    });
    return false;
  }
  constructor(private router: Router, private auth: AuthService){

  }
}
