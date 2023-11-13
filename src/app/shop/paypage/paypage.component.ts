import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as foodoncart ,  Foodincart } from 'src/app/model/FoodIncart';
import { Convert as SumPricecart , Totalincart } from 'src/app/model/totalIncart';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-paypage',
  templateUrl: './paypage.component.html',
  styleUrls: ['./paypage.component.scss']
})
export class PaypageComponent {

  cusID : any;
  Status = "Accept order";
  foods_onCart = Array<Foodincart>();
  totalOncart = Array<Totalincart>();
  TelStr : string = "เบอร์โทร :";
  AddStr : string = "ที่่อยู่ : ";

  constructor(private dataService : DataService , private http : HttpClient,
    private dialog : MatDialog){

    this.http.get(this.dataService.url + "/FoodIncart/" + this.dataService.userLocal.customer_id)
    .subscribe((data : any)=>{
      this.foods_onCart = foodoncart.toFoodincart(JSON.stringify(data));
      // console.log(this.foods_onCart.order_id);
    });

    this.http.get(this.dataService.url + "/TotalIncart/" + this.dataService.userLocal.customer_id)
    .subscribe((data : any)=>{
      this.totalOncart = SumPricecart.toTotalincart(JSON.stringify(data));
    });

  }

  paytocart(Name : string, Phone : string , Address : string){

    Phone = this.TelStr + Phone;
    Address = this.AddStr + Address;
    console.log(Phone);
    console.log(Address);

    let Sdate = new Date(); // assign current date and time to Sdate variable
    let Fdate = new Date(); // assign current date and time to Fdate variable
    // Fdate = "0000-00-00";
    this.cusID = JSON.stringify(this.dataService.userLocal.customer_id);

    if(Name != "" || Address != ""){
    let jsonObj = {

      customer_id: this.cusID,
      status : this.Status,
      sdate : Sdate,
      Totalprice : this.totalOncart[0].totalprice,
      name_customer : Name,
      phone : Phone,
      address : Address
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.url + "/Insertfood_order", jsonString,
    {observe: 'response'}).subscribe(response => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      window.alert("สั่งซื้อสินค้าแล้ว!!!");
      window.location.reload()
    });


  }
  }










}
