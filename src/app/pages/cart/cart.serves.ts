import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StorageServes } from 'src/app/service/storage.serves';

const addOrder = 'http://localhost:8080/api/order/add';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public errorMessage = "";

  constructor(private storage: StorageServes, private http:HttpClient) { }
  getProducts() {
    var temp = JSON.parse(localStorage.getItem("products") || '{}');
    this.cartItemList = temp;
    return temp;
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    localStorage.setItem("products", JSON.stringify(this.cartItemList));
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }

  removeCartItem(product: Product){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.nameProduct=== a.nameProduct){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    localStorage.setItem("products", JSON.stringify(this.cartItemList));
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    localStorage.setItem("products", JSON.stringify(this.cartItemList));
  }

  buyProduct(product: Product[]) {
    let user = this.storage.getUser();
    let token = this.storage.getToken(user);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', "Bearer "+token);
    this.http.post(addOrder+"?email="+user.email, JSON.stringify(product), {headers}).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}

