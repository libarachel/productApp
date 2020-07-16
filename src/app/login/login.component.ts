import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserDetails = {email:'', password:''};

  constructor(private _product: ProductService , private _router: Router) { }
 loginUser(){
  this._product.loginUser(this.loginUserDetails)
  .subscribe(
    res => {localStorage.setItem('token' , res["token"])
    // tslint:disable-next-line:whitespace
    this._router.navigate(['/add'])
  },
    err => console.log(err)
  // this._router.navigate([''])
  )}
  ngOnInit(): void {
  }

}
