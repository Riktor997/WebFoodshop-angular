import { Component } from '@angular/core';
import { Convert as foodoncart ,  Foodincart } from 'src/app/model/FoodIncart';
import { Convert as SumPricecart , Totalincart } from 'src/app/model/totalIncart';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Convert as food_order ,  FoodOrder } from 'src/app/model/foodOrder';
import { DetailOrderAdminComponent } from '../detail-order-admin/detail-order-admin.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent {

  foods_onCart = Array<Foodincart>();
  totalOncart = Array<Totalincart>();
  food_order = Array<FoodOrder>();
  cusID : any;
  Status = "";
  color_status = "";
  check : boolean = false;

  constructor(private http : HttpClient , private router : Router , private dataService : DataService ,
  private dialog : MatDialog){

    this.http.get(this.dataService.url + "/food_order")
    .subscribe((data : any)=>{
      this.food_order = food_order.toFoodOrder(JSON.stringify(data));
    });

  }

  DetailOrder(Oid : any , cusID : number){
    // console.log(cusID  + "mycusid");
    this.dataService.cusID = cusID;
    this.dataService.oid = Oid;
    this.dialog.open(DetailOrderAdminComponent , {
      minWidth:'900px',maxHeight : '600px',
    });
  }

  changeStatus(oid : any , cusID : any , Status : any){

    // let Fdate = new Date();
    // console.log(Fdate  + "this st");

    if(Status == "Successful")
    {
      console.log(Status + "if");
      let Fdate = new Date();
      console.log(Fdate);
      let jsonObj = {
        order_id : oid,
        customer_id : cusID,
        status : Status,
        fdate : Fdate
      }
      let jsonString = JSON.stringify(jsonObj);
      this.http.put(this.dataService.url + "/updateStatus" , jsonString,
      {observe: 'response'}).subscribe((response)=>{
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        window.location.reload()
      });
      window.alert('ต้องการแก้ไขสถานะใช่หรือไม่');
      this.color_status = "#00FF3C";
    }
    else if(Status != "")
    {
      console.log(Status + "else if");
      let jsonObj = {
        order_id : oid,
        customer_id : cusID,
        status : Status
      }
      let jsonString = JSON.stringify(jsonObj);
      this.http.put(this.dataService.url + "/updateStatus" , jsonString,
      {observe: 'response'}).subscribe((response)=>{
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        window.location.reload()
      });
      this.color_status = "#001AFF";
      window.alert('ต้องการแก้ไขสถานะใช่หรือไม่');
    }
    else{

    }
  }


}
