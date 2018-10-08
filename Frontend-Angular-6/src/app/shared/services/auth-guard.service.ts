import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
// import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._authService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}

