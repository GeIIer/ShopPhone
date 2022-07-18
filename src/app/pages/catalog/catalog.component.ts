import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@core/models';
import { ProductServes } from 'src/app/service/product.serves';
import { IGridColumn } from 'src/app/shared/grid/models';


@Component({
  selector: 'app-products',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public filterCategory : any
  public search: string;
  public price1: number;
  public price2: number;

  products: Product[];
  columns: IGridColumn[] = [
    { columnField: "nameProduct", columnName: "Название" },
    { columnField: "characteristic", columnName: "Описание"},
    { columnField: "price", columnName: "Цена, руб" },
  ];

  constructor(private router: Router, private productServes: ProductServes){

  }

  ngOnInit() {
    this.productServes.getProducts().subscribe(data => {
      this.products = data;
    });
  };
}


