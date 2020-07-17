import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUri:string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private _registerUrl = 'http://localhost:3000/api/register';
  
  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  registerUser(user){
    return  this.http.post(this._registerUrl , user);
  }
  // tslint:disable-next-line:typedef
  loginUser(user){
    return  this.http.post(this._loginUrl , user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getProducts(){
    let url=`${this.baseUri}/products`;
    return this.http.get(url);
  }
  newProduct(item){
    let url = `${this.baseUri}/add`;
    return this.http.post(url,{'product':item})
    .subscribe((data)=> {console.log(data)})
  }
  showProduct(id:any){
    let url=`${this.baseUri}/edit/${id}`;
    return this.http.get(url);
    // .subscribe((data)=>{console.log(data)})
  }
  editProduct(id:any,item){
    let url=`${this.baseUri}/update/${id}`;
    return this.http.post(url, item);
    // .subscribe((data)=>{console.log(data)})
  }

  deleteProduct(id: any) {
    let url= `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers });
  }


//   getProducts(){
//     return this.http.get('http://localhost:3000/products');
//   }
//   // tslint:disable-next-line:typedef
//   newProduct(item)
//   {
//  return this.http.post('http://localhost:3000/insert',{ 'product': item})
//     .subscribe(data => {console.log(data)});
//   }
// deleteProduct(id: any){
//   return this.http.delete('http://localhost:3000/delete/' +id)
//   .subscribe(data => {console.log(data)});
// }

}
