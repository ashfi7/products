import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
pageTitle:String="Product List";
imgWidth:number=50;
imgHeight:number=40;
image=false;
products:IProduct[];

  constructor(public productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data)=>{
      return this.products=JSON.parse(JSON.stringify(data))
    })
  }
onClick(){
  this.image=!this.image;
}
}
