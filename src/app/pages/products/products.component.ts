import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@core/models';
import { Subscription } from 'rxjs';
import { StorageServes } from 'src/app/service/storage.serves';
import { CartService } from '../cart/cart.serves';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private productUrl = 'http://localhost:8080/api/products/product';

  product: Product;
  idProduct: any;

  private quary: Subscription;

  constructor(private http: HttpClient, private storage: StorageServes, private cartService: CartService, private route: ActivatedRoute) {
    this.quary = route.queryParams.subscribe(
      (quaryParam: any) => {
        this.idProduct = quaryParam['product'];
      });
    }

  ngOnInit(): void {
    console.log(this.productUrl+"?product="+this.idProduct)

    this.http.get<Product>(this.productUrl+"?product="+this.idProduct).subscribe( data => {
      this.product = data;
    });
  }

  addToCart(item: any){
    this.cartService.addtoCart(item);
  }
}
