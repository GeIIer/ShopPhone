import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../core/models/product';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductServes {

  constructor(private http:HttpClient) {}

	private productUrl = 'http://localhost:8080/api/products';

  public getProducts() {
    return  this.http.get<Product[]>(this.productUrl);
  }
}
