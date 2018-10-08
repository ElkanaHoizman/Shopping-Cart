import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() total;
  id;
  getuser: any;
  status: string;
  name = '' ;
  auth;
  Qty_items;
  constructor(
    private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
  ) {
  }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];

    });

    this.auth = localStorage.getItem('user');
    this.status = '';
    this._authService.getAuth().subscribe(data => {
      this.getuser = data;
      this.get();
    });
  }
  get() {
    const auth = this.getuser.data.filter(data => data._id === this.auth);
    if (this.auth !== null) {
      this.name = auth[0].username;
      this.status = auth[0].role;
    }
  }
  Logout() {
    this._authService.logout();
  }
  Qty(e) {
    this.Qty_items = e;
  }
}
