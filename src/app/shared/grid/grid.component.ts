import { Component, Input, OnInit} from '@angular/core';
import { Product } from '@core/models';
import { CartService } from 'src/app/pages/cart/cart.serves';
import { ProductServes } from 'src/app/service/product.serves';
import { IGridColumn } from './models';
import { ColumnType } from './models';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() columns!: IGridColumn[];
  @Input() data!: any[];
  @Input() myType!: string;
  @Input() cart: any[] = [];

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private cartService : CartService, private productServes: ProductServes) { }


  typeColumn = ColumnType;

  addToCart(item: any){
    this.cartService.addtoCart(item);
  }

  moreInfo(item: any) {
    this.productServes.moreInfo(item);
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  ngOnInit(): void {
    console.log(this.columns);
    console.log(this.data);
  }

}
