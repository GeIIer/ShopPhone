import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'searchByPrice'
})
export class searchByPricePipe implements PipeTransform {
  transform(products: any[], price1: number, price2:number): any {
    if (price1 == null || price2 == null)
    {
      return products;
    }
    else if (price1 > price2) {
      return products;
    }
    else {
      return products.filter(product => product.price > price1 && product.price < price2);
    }
  }
}
