import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';



import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { MainComponent } from './main/main.component';

import { AdminShopComponent } from './shop/admin-shop/admin-shop.component';
import { CustomerShopComponent } from './shop/customer-shop/customer-shop.component';
import { DialogModule } from '@angular/cdk/dialog';
import { NewComponent } from './page/new/new.component';
import { EditComponent } from './page/edit/edit.component';
import { InsertFoodComponent } from './shop/insert-food/insert-food.component';
import { EditFoodComponent } from './shop/edit-food/edit-food.component';
import { CustomerCartComponent } from './shop/customer-cart/customer-cart.component';
import { RegisterCustomerComponent } from './login/register-customer/register-customer.component';
import { RegisterAdminComponent } from './login/register-admin/register-admin.component';
import { PaypageComponent } from './shop/paypage/paypage.component';
import { AdminOrderComponent } from './shop/admin-order/admin-order.component';
import { DetailOrderAdminComponent } from './shop/detail-order-admin/detail-order-admin.component';
import { CustomerOrderComponent } from './shop/customer-order/customer-order.component';
import { DetailOrderCustomerComponent } from './shop/detail-order-customer/detail-order-customer.component';
import { CustomerDetailFoodComponent } from './shop/customer-detail-food/customer-detail-food.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';





const appRoutes : Routes = [
  {path : '' , component : MainComponent},
  {path : 'login_admin' , component : AdminLoginComponent},
  {path : 'login_customer' , component : CustomerLoginComponent},
  {path : 'shop_admin' , component : AdminShopComponent},
  {path : 'shop_customer' , component : CustomerShopComponent},
  {path : 'customer_cart' , component : CustomerCartComponent},
  {path : 'register-customer' , component : RegisterCustomerComponent},
  {path : 'register-admin' , component : RegisterAdminComponent},
  {path : 'order-admin' , component : AdminOrderComponent},
  {path : 'detailOrderAdmin' , component : DetailOrderAdminComponent},
  {path : 'order-customer' , component : CustomerOrderComponent},
  {path : 'customer-detail-food' , component : CustomerDetailFoodComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    AdminShopComponent,
    CustomerShopComponent,
    NewComponent,
    EditComponent,
    InsertFoodComponent,
    EditFoodComponent,
    CustomerCartComponent,
    RegisterCustomerComponent,
    RegisterAdminComponent,
    PaypageComponent,
    AdminOrderComponent,
    DetailOrderAdminComponent,
    CustomerOrderComponent,
    DetailOrderCustomerComponent,
    CustomerDetailFoodComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    MatChipsModule,
    MatPaginatorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
