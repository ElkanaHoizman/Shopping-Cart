import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private _httpClient: HttpClient) { }
  get() {
    return this._httpClient.get('http://localhost:3000/cartitem');
  }
  Add(data) {
    return this._httpClient.post('http://localhost:3000/cartitem', data);
  }
  put(id, data) {
    return this._httpClient.put(`http://localhost:3000/cartitem/${id}` , data);
  }
  delete(id) {
    return this._httpClient.delete(`http://localhost:3000/cartitem/${id}`);
  }
}
