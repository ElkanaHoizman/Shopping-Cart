import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor(
    private _httpClient: HttpClient
  ) { }
  get () {
    return this._httpClient.get('http://localhost:3000/shoppingcart');
  }

  Add(data) {
    return this._httpClient.post('http://localhost:3000/shoppingcart', data);
  }
  put(id, data) {
    return this._httpClient.put(`http://localhost:3000/shoppingcart/${id}`, data);
  }
}
