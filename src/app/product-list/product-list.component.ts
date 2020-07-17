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
 public products: ProductModel[];
 // tslint:disable-next-line:no-inferrable-types
 imageWidth: number = 50;
 // tslint:disable-next-line:no-inferrable-types
 imageMargin: number = 2;
 showImage: boolean = false;
 selectedRowIndex:number = -1;
 // tslint:disable-next-line:adjacent-overload-signatures
 constructor(private productService: ProductService , private router: Router){}
 toggleImage(): void{
   this.showImage = !this.showImage;
 }
 deleteProducts(product,index)
{
  if(window.confirm('Are you sure?')){
    this.productService.deleteProduct(product._id)
     .subscribe((data)=>{
       this.products.splice(index, 1);
      //  console.log(`Deleted product is ${data}`);
  })
}
}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
    });
   
  }
  
}
