import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  filterProduct:Product[]=[];
  category:string;
  cart$:Observable<ShoppingCart>;
  constructor(private route:ActivatedRoute,private productService:ProductService,private shoppingCartService:ShoppingCartService) { 
  }
 async ngOnInit()
  {
    this.cart$=(await this.shoppingCartService.getCart());
    this.populateProducts();
  }
  private populateProducts()
  {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.route.queryParamMap.subscribe(params=>{
        this.category=params.get('category');
        this.applyFilter();
         });
    });
  }
  private applyFilter()
  {
    this.filterProduct=(this.category)?this.products.filter(prod=>prod.category===this.category):this.products; 
  }
}
