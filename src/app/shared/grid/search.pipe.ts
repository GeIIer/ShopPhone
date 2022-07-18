import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {
  transform(products: any[], search: string): any {
    if (search == null) {
      return products;
    }
    else{
      return products.filter(product => product.nameProduct.toLowerCase().includes(search.toLowerCase()));
    }
  }
}
