import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as Localuser, User } from 'src/app/model/user';
import { Convert as food_order ,  FoodOrder } from 'src/app/model/foodOrder';
import { Convert as orderCustomer , FoodOrderCustomer } from 'src/app/model/ordercustomer';
import { MatDialog } from '@angular/material/dialog';
import { DetailOrderCustomerComponent } from '../detail-order-customer/detail-order-customer.component';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent {

  food_order = Array<FoodOrder>();
  orderDetail = Array<FoodOrder>();

  ordercustomer = Array<FoodOrderCustomer>();
  DetailCustomer = Array<FoodOrderCustomer>();
  userLocal : any;
  check : boolean = true;

  constructor(private dataservice : DataService , private http : HttpClient,
              private dialog : MatDialog){


  const userStr = localStorage.getItem('user');  //get user for user cart item
  if (userStr) {
    const userObj = JSON.parse(userStr);
    this.userLocal = Localuser.toUser(JSON.stringify(userObj));
    this.dataservice.userLocal = this.userLocal;
  }

  this.http.get(this.dataservice.url + "/Order_customer/" + this.dataservice.userLocal.customer_id)
  .subscribe((data : any)=>{
    this.ordercustomer = orderCustomer.toFoodOrderCustomer(JSON.stringify(data));
    // console.log("order" + this.food_order);
  });

}

  DetailOrderCustomer(Oid : any , cusID : number){
    this.dataservice.cusID = cusID;
    this.dataservice.oid = Oid;
    this.dialog.open( DetailOrderCustomerComponent , {
      minWidth:'900px',maxHeight : '600px',
    });
  }








}

