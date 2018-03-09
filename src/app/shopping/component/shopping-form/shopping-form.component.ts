import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Order } from '../../../shared/models/order';
@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit,OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping={};
  userId:string;
  userSubscription:Subscription;
  constructor(private router:Router,
    private authService:AuthService,private orderService:OrderService,private shoppingCartService:ShoppingCartService) { }
 async placeOrder()
  {
    let order=new Order(this.userId,this.shipping,this.cart);
    let result=await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success',result.key]);
  }
  async ngOnInit()
  {
    this.userSubscription=this.authService.user$.subscribe(user=>this.userId=user.uid);
  }
  ngOnDestroy()
  {
    this.userSubscription.unsubscribe();
  }
}
