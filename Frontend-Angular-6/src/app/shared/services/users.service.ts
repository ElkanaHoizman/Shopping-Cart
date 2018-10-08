import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient) { }
  get() {
    return this._httpClient.get('http://localhost:3000/user');
  }

  Add(data) {
    return this._httpClient.post('http://localhost:3000/user', data);
  }
}
