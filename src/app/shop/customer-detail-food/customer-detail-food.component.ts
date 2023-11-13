import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as Localuser ,  User } from 'src/app/model/user';

@Component({
  selector: 'app-customer-detail-food',
  templateUrl: './customer-detail-food.component.html',
  styleUrls: ['./customer-detail-food.component.scss']
})
export class CustomerDetailFoodComponent {

  selectedFood : any;
  cusID : any;
  userLocal : any;
  constructor(private dialogRef : MatDialogRef<CustomerDetailFoodComponent>, private dataservice : DataService ,private http : HttpClient){

    this.selectedFood = this.dataservice.selectedFood;

    const userStr = localStorage.getItem('user');  //get user for user cart item
    if (userStr) {
      const userObj = JSON.parse(userStr);
      this.userLocal = Localuser.toUser(JSON.stringify(userObj));
      // console.log(this.userLocal);
      this.dataservice.userLocal=this.userLocal;
    }
  }

  Addtocart(foodID : any , amountFood : any){
    //amountFood is value in from text
    console.log("userid" + JSON.stringify(this.dataservice.userLocal.customer_id));
    console.log("foodid" + foodID);
    console.log("amount" + amountFood);
    this.cusID = JSON.stringify(this.dataservice.userLocal.customer_id);
    if(amountFood >= 1){

      let jsonObj = {
      food_id : foodID,
      customer_id: this.cusID,
      amount: amountFood
    }

    let jsonString = JSON.stringify(jsonObj);
    console.log(jsonString);
    this.http.post(this.dataservice.url + "/Insertcart", jsonString,
    {observe: 'response'}).subscribe(response => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      window.alert("เพิ่มสินค้าใส่ตะกร้าแล้ว");
      window.location.reload()
    });

  }

}
}
