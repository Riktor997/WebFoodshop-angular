import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Convert as foodslist ,Food } from 'src/app/model/food.model';
import { Convert as foodstype ,FoodType } from 'src/app/model/foodType.model';
import { DataService } from 'src/app/service/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  foodsType = Array<FoodType>();

  constructor(private data : DataService ,private dialogRef : MatDialogRef<NewComponent>,private http : HttpClient){
    this.foodsType = data.FoodType;
  }

  close(){
    this.dialogRef.close();
  }

  addnew(food_id:any,food_name:any,price:any,image:any,type_id:any){

    let jsonObj = {
      food_id : food_id,
      food_name : food_name ,
      price : price ,
      image : image ,
      type_id : type_id
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.url + "/Insertfood" , jsonString,
    {observe: 'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    });
  }
}
