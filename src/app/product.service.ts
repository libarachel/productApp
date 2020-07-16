import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _registerUrl = 'http://localhost:3000/register';
  
  private _loginUrl = 'http://localhost:3000/login';
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
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
  // tslint:disable-next-line:typedef
  newProduct(item)
  {
 return this.http.post('http://localhost:3000/insert',{ 'product': item})
    .subscribe(data => {console.log(data)});
  }
deleteProduct(id: any){
  return this.http.delete('http://localhost:3000/delete/' +id)
  .subscribe(data => {console.log(data)});
}

}
