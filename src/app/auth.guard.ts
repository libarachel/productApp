import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _product: ProductService , private _router: Router )
  {

  }
  canActivate():boolean {
if (this._product.loggedIn())
{
console.log('true');
return true;
}
else{
 
  this._router.navigate(['/login']);
  return false;
}
  }
  
}
