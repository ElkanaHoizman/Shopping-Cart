import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   constructor(private _httpClient: HttpClient) { }
  // getAllproduct() {
  //   this.url = 'http://localhost:3000/product';
  //   return this._http.get(this.url);
  // }
  getAll() {
    return this._httpClient.get('http://localhost:3000/product');
  }
  get_sinle(id) {
    return this._httpClient.get(`http://localhost:3000/product/${id}`);
  }
  Add(data) {
    return this._httpClient.post('http://localhost:3000/product', data);
  }
  put(id , data) {
    return this._httpClient.put(`http://localhost:3000/product/${id}`, data);
  }
}
