import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    password: '',
    name: '',
  };
 msg: string;
  getuser: any;
  constructor(
    private _router: Router,
    private _usersService: UsersService,
    private _AuthService: AuthService
  ) { }

  ngOnInit() {
    this._usersService.get().subscribe(data => {
      this.getuser = data;
    });
  }
  send(e) {
    const user = this.getuser.data.filter(data => data.name === e.name && data.password === e.password );
    user.length > 0 ? localStorage.setItem('id', user[0]._id) : this.msg = 'User not in system';
    this._AuthService.logins(user[0]);
  }
}
