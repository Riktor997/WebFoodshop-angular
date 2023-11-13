import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import {MatListModule, MatListOption} from '@angular/material/list';

import { Convert as foodslist ,Food } from 'src/app/model/food.model';
import { Convert as foodstype ,FoodType } from 'src/app/model/foodType.model';
import { Convert as foods_order , FoodOrder } from 'src/app/model/foodOrder';
import { CartService } from 'src/app/service/cart.service';
import { Convert as Localuser ,  User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { Convert as order_amount, OrderAmount } from 'src/app/model/order_amount';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDetailFoodComponent } from '../customer-detail-food/customer-detail-food.component';


@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.scss']
})
export class CustomerShopComponent {

  foods = Array<Food>();
  foodsType = Array<FoodType>();
  selectedFood : any;
  foods_order = Array<FoodOrder>();
  foods_cart = Array<OrderAmount>();
  foods_onCart = Array<OrderAmount>();
  itemIncart : any;
  userLocal : any;
  cusID : any;
  FoodName : any;

  constructor(public dataService : DataService , private http : HttpClient ,
    option :MatListModule,private cartService: CartService , private router : Router ,private dialog : MatDialog){

    http.get(dataService.url + "/food")
    .subscribe((data : any)=>{
      this.foods = foodslist.toFood(JSON.stringify(data));
      // console.log(this.foods);
    });

    http.get(dataService.url + "/food_type")
    .subscribe((data : any)=>{
      this.foodsType = foodstype.toFoodType(JSON.stringify(data));
      // console.log(this.foodsType);
    });


    const userStr = localStorage.getItem('user');  //get user for user cart item
    if (userStr) {
      const userObj = JSON.parse(userStr);
      this.userLocal = Localuser.toUser(JSON.stringify(userObj));
      console.log(this.userLocal.name);
      this.dataService.userLocal=this.userLocal;
    }

    // console.log("userid" + JSON.stringify(this.dataService.userLocal.customer_id));




  }

  showFood(option : MatListOption){
    this.selectedFood = option.value;
    // console.log(this.selectedFood);
  }

  foodTypename(typeName : string){
    this.http.get(this.dataService.url +"/food_type/"+ typeName)
    .subscribe(data=>{
      this.foods = foodslist.toFood(JSON.stringify(data));
      // console.log(this.foods);
    });
  }

  showAllfoods(){
    this.http.get(this.dataService.url + "/food")
    .subscribe((data : any)=>{
      this.foods = foodslist.toFood(JSON.stringify(data));
      // console.log(this.foods);
    });
  }

  Addtocart(foodID : any , amountFood : any){
      //amountFood is value in from text
      // console.log("userid" + JSON.stringify(this.dataService.userLocal.customer_id));
      // console.log("foodid" + foodID);
      // console.log("amount" + amountFood);
      this.cusID = JSON.stringify(this.dataService.userLocal.customer_id);
      if(amountFood >= 1){
      window.alert("เพิ่มสินค้าใส่ตะกร้าแล้ว");
      let jsonObj = {
        food_id : foodID,
        customer_id: this.cusID,
        amount: amountFood
      }
      let jsonString = JSON.stringify(jsonObj);
      console.log(jsonString);
      this.http.post(this.dataService.url + "/Insertcart", jsonString,
      {observe: 'response'}).subscribe(response => {
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
      });
    }

 }


  ItemsLength(){

    this.itemIncart = this.cartService.ItemsLength();
    // console.log(this.itemIncart);
  }


  chk(fid: any){
    console.log(fid);
    this.dataService.selectedFood = fid;
    this.dialog.open(CustomerDetailFoodComponent,{
      minWidth:'1000px', minHeight : '500px'
     });
  }


  show(option: any){
    this.selectedFood = option.value;
    this.dataService.selectedFood = this.selectedFood;
    // console.log(option.value);
  }
  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigateByUrl("/login_customer");
  }

  FoodDetail(){
    console.log("test");
    // this.dataService.FoodType = this.foodsType;
  //   this.dialog.open(CustomerDetailFoodComponent,{
  //   minWidth:'300px',
  //  });
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
      //filter return array value , match is check foodname == food_name in data
      this.foods = this.foods.filter(res =>
        {
        return res.food_name.toLocaleLowerCase().match(this.FoodName.toLocaleLowerCase());
      })
    }
  }




}
