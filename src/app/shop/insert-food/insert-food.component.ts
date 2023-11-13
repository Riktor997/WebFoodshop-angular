import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Convert as foodslist ,Food } from 'src/app/model/food.model';
import { Convert as foodstype ,FoodType } from 'src/app/model/foodType.model';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-insert-food',
  templateUrl: './insert-food.component.html',
  styleUrls: ['./insert-food.component.scss']
})
export class InsertFoodComponent {

  foodsType = Array<FoodType>();
  foods = Array<Food>();

  constructor(private data : DataService ,

    private dialogRef : MatDialogRef<InsertFoodComponent>,
    private http : HttpClient){
    this.foodsType = data.FoodType;
    this.foods = data.Foods;
  }

  addnew(food_id:Number,food_name:String,price:Number,image:String,type_id:Number){
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
      window.location.reload()
    });
  }

  close(){
    this.dialogRef.close();
  }
}
