import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../products/product.model';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  constructor(public productService:ProductService) { }
  
  productItem=new IProduct(null,null,null,null,null,null,null,null);
  ngOnInit() {
  }

  AddProduct()
{
  alert('hello')
  this.productService.newProduct(this.productItem);
}  

}
