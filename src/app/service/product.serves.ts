import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from '../core/models/product';
import { Router } from '@angular/router';

@Injectable()
export class ProductServes {

  constructor(private http:HttpClient, private router: Router) {}

	private productUrl = 'http://localhost:8080/api/products';

  public getProducts() {
    return  this.http.get<Product[]>(this.productUrl);
  }

  public moreInfo(product: Product) {
    this.router.navigate(["/"])
  }
}
