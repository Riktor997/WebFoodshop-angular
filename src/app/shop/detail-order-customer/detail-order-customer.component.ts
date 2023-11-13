import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as orderCustomer , FoodOrderCustomer } from 'src/app/model/ordercustomer';
import { Convert as Localuser, User } from 'src/app/model/user';


@Component({
  selector: 'app-detail-order-customer',
  templateUrl: './detail-order-customer.component.html',
  styleUrls: ['./detail-order-customer.component.scss']
})
export class DetailOrderCustomerComponent {
  userLocal : any;

  ordercustomer = Array<FoodOrderCustomer>();
  DetailCustomer = Array<FoodOrderCustomer>();


  constructor(private dialogRef : MatDialogRef<DetailOrderCustomerComponent> ,
    private dataservice : DataService , private http : HttpClient ){


    const userStr = localStorage.getItem('user');  //get user for user cart item
    if (userStr) {
      const userObj = JSON.parse(userStr);
      this.userLocal = Localuser.toUser(JSON.stringify(userObj));
      this.dataservice.userLocal = this.userLocal;
    }


    this.http.get(this.dataservice.url + "/DetailOrderCustomer/" + this.dataservice.userLocal.customer_id + "/" + this.dataservice.oid)
    .subscribe((data : any)=>{
      this.DetailCustomer = orderCustomer.toFoodOrderCustomer(JSON.stringify(data));
      console.log("detail" + this.DetailCustomer);
    });

  }

  close(){
    this.dialogRef.close();
  }
}
