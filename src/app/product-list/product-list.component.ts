import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 // tslint:disable-next-line:ban-types
 title: String = 'product List';
 products: ProductModel [];
 // tslint:disable-next-line:no-inferrable-types
 imageWidth: number = 50;
 // tslint:disable-next-line:no-inferrable-types
 imageMargin: number = 2;
 showImage: boolean = false;
 // tslint:disable-next-line:adjacent-overload-signatures
 constructor(private productService: ProductService , private router: Router){}
 toggleImage(): void{
   this.showImage = !this.showImage;
 }
 deleteProducts(id:any)
 {
   this.productService.deleteProduct(id);
   console.log('Called');
  alert('Success');
 }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
    });
   
  }
  
}
