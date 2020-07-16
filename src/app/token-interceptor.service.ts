import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req,next)
  {
    let productService = this.injector.get(ProductService);
    let tokenizedReq = req.clone(
      {
      setHeader: {
        Authorization: `Bearer ${productService.getToken()}`
      }
    }
    )
    return next.handle(tokenizedReq)
  }
}
