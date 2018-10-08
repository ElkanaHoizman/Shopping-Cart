import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

// import { Subject } from 'rxjs/index';
// import { Observable } from 'rxjs';
// import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // subject = new Subject();
    user = {
    username: '',
    password: '',
    role: ''
  };
  auth;
  userid: any;
  mySubscription;
  constructor(private _httpClient: HttpClient, private _router: Router) {
    this.userid = localStorage.getItem('user');
    // this._router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    // this.mySubscription = this._router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Trick the Router into believing it's last link wasn't previously loaded
    //     this._router.navigated = false;
    //   }
    // });
  }
  logins(data) {
    this.user.username = data.name;
    this.user.password = data.password;
    this.user.role = data.role;
    return this._httpClient.post('http://localhost:3000/login', this.user).subscribe(user => {
      return this._httpClient.get('http://localhost:3000/').subscribe(auth => {
        this.auth = auth;
        const users = this.auth.data.filter(d => d.username === this.user.username && d.password === this.user.password);
        console.log(users[0]._id);
        localStorage.setItem('user', users[0]._id);
        this._router.navigate(['/']);
        location.reload();
      });
    });
  }
  getAuth() {
    return this._httpClient.get('http://localhost:3000');
  }
  logout() {
    const id = localStorage.getItem('user');
    this.delete(id);
    localStorage.removeItem('user');
    this._router.navigate(['/']);
    location.reload();
  }
  delete(id) {
    return this._httpClient.delete(`http://localhost:3000/${id}`).subscribe();
  }
  isLoggedIn() {
    if (this.userid !== null) {
      return 1;
    } else {
      return 0;
    }
  }
}
