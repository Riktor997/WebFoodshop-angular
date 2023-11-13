import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Component } from '@angular/core';
import { Convert as foodslist ,Food } from 'src/app/model/food.model';
import { Convert as foodstype ,FoodType } from 'src/app/model/foodType.model';
import { InsertFoodComponent } from '../insert-food/insert-food.component';
import { MatDialog } from '@angular/material/dialog';
import { EditFoodComponent } from '../edit-food/edit-food.component';
import { Convert as Localuser ,  User } from 'src/app/model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-shop',
  templateUrl: './admin-shop.component.html',
  styleUrls: ['./admin-shop.component.scss']
})
export class AdminShopComponent {

  foods = Array<Food>();
  foodsType = Array<FoodType>();
  selectedFood : any;
  FoodName : any;
  p:number = 1;
  itemperpage:Number = 8;
  totalProduct:any;
  userLocal = Array<User>();

  constructor(private dataService : DataService , private http : HttpClient , private dialog : MatDialog,
              private router : Router){

    http.get(dataService.url + "/food")
    .subscribe((data : any)=>{
      this.foods = foodslist.toFood(JSON.stringify(data));
      console.log(this.foods);
    });

    http.get(dataService.url + "/food_type")
    .subscribe((data : any)=>{
      this.foodsType = foodstype.toFoodType(JSON.stringify(data));
      console.log(this.foodsType);
    });

    http.get(dataService.url + "/food_type")
    .subscribe((data : any)=>{
      this.foodsType = foodstype.toFoodType(JSON.stringify(data));
      console.log(this.foodsType);
    });

    const userStr = localStorage.getItem('user');
    if (userStr) {
      const userObj = JSON.parse(userStr);
      this.userLocal = Localuser.toUser(JSON.stringify(userObj));
      console.log(this.userLocal + "userrrrrr");
      this.dataService.userLocal = this.userLocal;
    }

  }

  showAllfoods(){
    this.http.get(this.dataService.url + "/food")
    .subscribe((data : any)=>{
      this.foods = foodslist.toFood(JSON.stringify(data));
      this.totalProduct = data.length;
      console.log(this.foods);
    });
  }

  foodTypename(typeName : string){
    this.http.get(this.dataService.url +"/food_type/"+ typeName)
    .subscribe(data=>{
      this.foods = foodslist.toFood(JSON.stringify(data));
      console.log(this.foods);
    });
  }

  InsertFood(){
    this.dataService.FoodType = this.foodsType;
    this.dialog.open(InsertFoodComponent,{
    minWidth:'300px',
   });
  }

  removeData(food_id : Number){
    if(confirm("ยืนยันการลบข้อมูล?")){
      this.http.delete(this.dataService.url + "/Deletefood/" + food_id)
      .subscribe((res) =>{
        console.log(res);
      });
      window.location.reload()
    }
  }

  edit(){
    this.dataService.Foods = this.foods;
    this.dataService.selectedFood = this.selectedFood;
    this.dataService.FoodType = this.foodsType;
    this.dialog.open(EditFoodComponent,{
      minWidth: '300px',
    });
  }

  show(option: any){
    this.selectedFood = option.value;
    this.dataService.selectedFood = this.selectedFood;
    console.log(option.value);
  }

  InsertFoodtoCart(food_id : Number){

  }

  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigateByUrl("/login_admin");
  }

  Search(){

    if(this.FoodName == ""){
      this.http.get(this.dataService.url + "/food")
      .subscribe((data : any)=>{
        this.foods = foodslist.toFood(JSON.stringify(data));
        // console.log(this.foods);
      });
    }
    else{
      this.foods = this.foods.filter(res =>{
        return res.food_name.toLocaleLowerCase().match(this.FoodName.toLocaleLowerCase());
      })
    }
  }

  chk(){

  }




}
