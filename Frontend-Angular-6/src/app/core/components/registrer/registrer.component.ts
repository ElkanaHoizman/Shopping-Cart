import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
user = {
  email: '',
  userid: '',
  password: '',
  password2: '',
  city: '',
  street: '',
  name: '',
  lastname: ''
};
  continued = false;
  getuserid: any;
  constructor(
    private _router: Router,
    private _usersService: UsersService,
    private _authService: AuthService
  ) {
   }


  ngOnInit() {
    this.get();
  }
  send(res ) {
    const user = this.getuserid.data.filter(data => data.userid === res.userid);
    if (user.length > 0 ) {
      alert('An existing ID is in the system');
      this._router.navigate(['/']);
    } else { this.continued = true ; }
  }
  registr(res) {
    this._usersService.Add(this.user).subscribe(s => {
      this.users(res);
    });
    }
    get() {
      this._usersService.get().subscribe(data => {
        this.getuserid = data;
      });
    }
  users(res) {
      this._usersService.get().subscribe(data => {
        this.getuserid = data;
        const user = this.getuserid.data.filter(d => d.name === res.name && d.city === res.city && d.street === res.address );
        localStorage.setItem('id', user[0]._id);
        // this._authService.register(user[0]);
        this._authService.logins(user[0]);
        // this._router.navigate(['/shoppingcart']);
        // this.get();
      });
    }
  }
