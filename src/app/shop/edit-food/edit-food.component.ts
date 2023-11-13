import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Food } from 'src/app/model/food.model';
import { FoodType } from 'src/app/model/foodType.model';
import { DataService } from 'src/app/service/data.service';
import { InsertFoodComponent } from '../insert-food/insert-food.component';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent {
  foodsType = Array<FoodType>();
  foods = Array<Food>();
  selectedFood : Food;

  constructor(private data : DataService ,
    private dialogRef : MatDialogRef<EditFoodComponent>,
    private http : HttpClient){
    this.foodsType = data.FoodType;
    this.foods = data.Foods;
    this.selectedFood = data.selectedFood;
  }

  check(){
    console.log(this.selectedFood.fid);
    // console.log(this.selectedFood.food_name);
    // console.log(this.selectedFood.price);
    // console.log(this.selectedFood.type_id);
  }
  close(){

    this.dialogRef.close();

  }

  save(food_name:String,price:Number,image:String,type_id:Number,food_id:Number){

    let jsonObj = {

      food_name : food_name ,
      price : price ,
      image : image ,
      type_id : type_id,
      food_id : food_id,
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.put(this.data.url + "/Updatefood/" + this.selectedFood.fid , jsonString,
    {observe: 'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
      window.location.reload()
    });
  }
}
