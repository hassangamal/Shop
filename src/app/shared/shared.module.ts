import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';

import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductQuantityComponent } from './component/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import {  AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,  
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
  ],
  declarations: [
  ProductCardComponent,
  ProductQuantityComponent,
],
exports:[
  ProductCardComponent,
  ProductQuantityComponent,    
  CommonModule,
  FormsModule,
  CustomFormsModule,
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  NgbModule.forRoot().ngModule,
],
providers:[
  AuthService,
  AuthGuardService ,
  CategoryService,
  ProductService,
  ShoppingCartService,
  OrderService,
  UserService
]
})
export class SharedModule { }
