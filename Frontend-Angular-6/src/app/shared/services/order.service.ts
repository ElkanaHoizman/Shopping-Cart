import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _httpClient: HttpClient) { }

get() {
  return this._httpClient.get('http://localhost:3000/order');
}

Add(data) {
  return this._httpClient.post('http://localhost:3000/order', data);
}
}
