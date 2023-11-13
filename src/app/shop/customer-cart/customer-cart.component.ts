import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodslist ,Food } from 'src/app/model/food.model';
import { Convert as foodstype ,FoodType } from 'src/app/model/foodType.model';
import { CartService } from 'src/app/service/cart.service';
import { Convert as Localuser ,  User } from 'src/app/model/user';
import { Convert as foodoncart ,  Foodincart } from 'src/app/model/FoodIncart';
import { Convert as order_amount ,  OrderAmount } from 'src/app/model/order_amount';
import { Convert as SumPricecart , Totalincart } from 'src/app/model/totalIncart';
import { Router } from '@angular/router';
import { PaypageComponent } from '../paypage/paypage.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.scss']
})

export class CustomerCartComponent {

  foods = Array<Food>();
  foodsType = Array<FoodType>();
  // foods_order = Array<FoodOrder>();
  foods_onCart = Array<Foodincart>();
  orderAmount = Array<OrderAmount>();
  totalOncart = Array<Totalincart>();
  cartItem : any;
  Len_cart : any;
  checkData : any;
  userLocal : any;
  itemsIncart = this.cartService.getItems();



  constructor(private dataService : DataService , private http : HttpClient, private cartService: CartService
    ,private router : Router , private dialog : MatDialog){

    this.checkData = this.dataService.AddTocart;


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
      this.dataService.userLocal = this.userLocal;
      // console.log(this.userLocal);
    }

    //print all table order Amount
    http.get(dataService.url + "/Orderamount/" +  this.dataService.userLocal.customer_id)
    .subscribe((data : any)=>{
      this.orderAmount = order_amount.toOrderAmount(JSON.stringify(data));
      // console.log(this.dataService.userLocal);
      // console.log(this.orderAmount);
    });

    // show all food in cart where id = id
    this.http.get(this.dataService.url + "/FoodIncart/" + this.dataService.userLocal.customer_id)
    .subscribe((data : any)=>{
      this.foods_onCart = foodoncart.toFoodincart(JSON.stringify(data));
    });

    //check all total price in cart  ***BUG
    this.http.get(this.dataService.url + "/TotalIncart/" + this.dataService.userLocal.customer_id)
    .subscribe((data : any)=>{
      this.totalOncart = SumPricecart.toTotalincart(JSON.stringify(data));
    });

    //print amount food where cusID **BUG
    http.get(dataService.url + "/FoodAmount/" + this.dataService.userLocal.customer_id)
    .subscribe((data : any)=>{
      this.orderAmount = order_amount.toOrderAmount(JSON.stringify(data));
      // console.log(this.orderAmount + "this amount");
    });

    // this.Len_cart = this.orderAmount.length + 1;

    //count in  cart
    http.get(dataService.url + "/FoodamoutIncart/" +  this.dataService.userLocal.customer_id)
    .subscribe((data : any)=>{
      this.Len_cart = order_amount.toOrderAmount(JSON.stringify(data));
    });


}

  Addamount(foodID :any){

    let jsonObj = {
      food_id : foodID,
      customer_id : this.userLocal.customer_id
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.put(this.dataService.url + "/Addamount" , jsonString,
    {observe: 'response'}).subscribe((response)=>{
      // console.log(JSON.stringify(response.status));
      // console.log(JSON.stringify(response.body));
      window.location.reload()
      this.router.navigateByUrl("/customer_cart");
    });

  }

  RemoveAmount(foodID : any){
    let jsonObj = {
      food_id : foodID,
      customer_id : this.userLocal.customer_id
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.put(this.dataService.url + "/RemoveAmount" , jsonString,
    {observe: 'response'}).subscribe((response)=>{
      // console.log(JSON.stringify(response.status));
      // console.log(JSON.stringify(response.body));
      window.location.reload()
      this.router.navigateByUrl("/customer_cart");
    });




  }

  //remove food in cart
  removeinCart(foodID : any){

    window.alert("ลบออกจากตะกร้า ?")
    this.http.delete(this.dataService.url+"/RemoveFood/"+ foodID + "/"
    + this.userLocal.customer_id).subscribe((res)=>{
      console.log(res);
      window.location.reload()
      this.router.navigateByUrl("/customer_cart");
    });


  }

  removeAllCart(){

    window.alert("ลบสินค้าทั้งหมดออกจากตะกร้า ?")
    this.http.delete(this.dataService.url+"/RemoveAllFood/" + this.userLocal.customer_id)
    .subscribe((res)=>{
      console.log(res);
      window.location.reload()

    });


  }

  PayIncart(){
    this.dialog.open(PaypageComponent ,{
      minWidth:'300px',
    });
  }




}
