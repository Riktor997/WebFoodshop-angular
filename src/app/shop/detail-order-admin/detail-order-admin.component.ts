import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as orderAdmin ,  FoodOrder } from 'src/app/model/foodOrder';
import { Convert as Localuser, User } from 'src/app/model/user';
import { Convert as SumPricecart , Totalincart } from 'src/app/model/totalIncart';
@Component({
  selector: 'app-detail-order-admin',
  templateUrl: './detail-order-admin.component.html',
  styleUrls: ['./detail-order-admin.component.scss']
})
export class DetailOrderAdminComponent {

  orderDetail = Array<FoodOrder>();
  userLocal : any;
  totalOncart = Array<Totalincart>();

  constructor(private dataservice : DataService , private http : HttpClient,
              private dialogRef : MatDialogRef<DetailOrderAdminComponent>){


    const userStr = localStorage.getItem('user');  //get user for user cart item
    if (userStr) {
      const userObj = JSON.parse(userStr);
      this.userLocal = Localuser.toUser(JSON.stringify(userObj));
      this.dataservice.userLocal = this.userLocal;
    }

    // show all food in order where order_id is not null
    this.http.get(this.dataservice.url + "/FoodInorderDetail/" + this.dataservice.cusID + "/" + this.dataservice.oid)
    .subscribe((data : any)=>{
      this.orderDetail = orderAdmin.toFoodOrder(JSON.stringify(data));
      // console.log(this.orderDetail);
    });

    this.http.get(this.dataservice.url + "/TotalIncart/" + this.dataservice.cusID)
    .subscribe((data : any)=>{
      this.totalOncart = SumPricecart.toTotalincart(JSON.stringify(data));
    });
  }

  close(){
    this.dialogRef.close();
  }


}
