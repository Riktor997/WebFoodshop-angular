import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Convert as listCus , RegisterCustomer } from 'src/app/model/RegisterCustomer';
import { Convert as foodstype ,FoodType } from 'src/app/model/foodType.model';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { Convert as Localuser ,  User } from 'src/app/model/user';
import { Convert as loginCus, loginCustomer } from 'src/app/model/loginCustomer';
import { Convert as cusList, CustomerList } from 'src/app/model/customerList';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {

  listCus = Array<RegisterCustomer>();
  name : any;
  password : any;
  userLocal : any;
  constructor(private http : HttpClient,private dataService : DataService,private router : Router){

    //print all list
    this.http.get(dataService.url + "/customer")
    .subscribe((data : any)=>{
      this.listCus = listCus.toRegisterCustomer(JSON.stringify(data));

    });
  }

  login(nameInform : string , passwordInform : string){

    let json = {name : nameInform,password : passwordInform};
    let jsonString = JSON.stringify(json);

    this.http.post(this.dataService.url + "/LoginCustomer" , jsonString ,{observe: 'response'})
    .subscribe((response : any)=>{
      console.log(response);
      let responseBody = response.body;
      this.userLocal = Localuser.toUser(JSON.stringify(responseBody));
      this.dataService.userLocal = this.userLocal;
      console.log(JSON.stringify(this.userLocal));
      localStorage.setItem("user", JSON.stringify(this.userLocal));
      console.log(this.userLocal);
      this.router.navigateByUrl("/shop_customer");

    });









  }


}
