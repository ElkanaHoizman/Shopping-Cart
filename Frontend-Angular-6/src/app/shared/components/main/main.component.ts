import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userid;
  getuser;
  status: string;
  constructor( private _authService: AuthService
) { }

  ngOnInit() {
    this.userid = localStorage.getItem('user');

this._authService.getAuth().subscribe(user => {
  this.getuser = user;
  this.get();
});
// this.get();
  }
  get() {
    const user = this.getuser.data.filter(data => data._id === this.userid);
    if (user.length === 0 ) {
      this.status = '';
    } if (user.length > 0  ) {
           if (user[0].role === 'client' ) {
             this.status = 'client';
        console.log('client');
      }
      if (user[0].role === 'admin') {
        this.status = 'admin';
        console.log('admin');
      }
    }

  }

}
