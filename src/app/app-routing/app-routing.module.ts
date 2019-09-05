import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { NewproductComponent } from '../newproduct/newproduct.component';

const routes: Routes=[
  {
    path:'',component: ProductListComponent
  },
  {
    path:'newproduct',component: NewproductComponent
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
