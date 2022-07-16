import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthServes } from 'src/app/service/auth.serves';
import { StorageServes } from 'src/app/service/storage.serves';
import { IGridColumn } from '../../shared/grid/models';
import { CartService } from './cart.serves';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  public products : any = [];
  public grandTotal !: number;
  isLoggedIn:boolean = false;
  constructor(private storage: StorageServes, private auth: AuthServes, private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storage.isLoggedIn();
    this.products = this.cartService.getProducts();
    this.grandTotal = this.cartService.getTotalPrice();
  }

  routToLogin(){
    this.router.navigate(['/login']);
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  buyProduct(totalPrice: number){
    this.cartService.buyProduct(this.products, totalPrice);
    this.cartService.removeAllCart();
  }

  columns: IGridColumn[] = [
    { columnField: "nameProduct", columnName: "Название" },
    { columnField: "characteristic", columnName: "Описание"},
    { columnField: "price", columnName: "Цена, руб" },
  ]

}
