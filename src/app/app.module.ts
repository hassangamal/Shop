import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { ProductsComponent } from './shopping/component/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

// import { HttpModule } from '@angular/http';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
    {path: '', component: ProductsComponent},
    {path: 'login', component: LoginComponent},
  ])
  ],
  providers: [AngularFireAuth,AdminAuthGuardService , AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
