import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// tslint:disable-next-line:whitespace
registeredUser={email:'',password:''};

  // tslint:disable-next-line:variable-name
  constructor(private _product: ProductService, private _router: Router) { }
  // tslint:disable-next-line:typedef
  registerUser(){
  this._product.registerUser(this.registeredUser)
  .subscribe(
    res => {
      localStorage.setItem('token' , res["token"])
      this._router.navigate(['/']);
    },
    err => console.log(err)
  )

  
}
  ngOnInit(): void {
  }

}