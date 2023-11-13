import { Component } from '@angular/core';
import { Convert as Localuser ,  User } from 'src/app/model/user';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  userLocal = Array<User>();
  constructor(private dataService : DataService , private http : HttpClient , private router : Router){
  }

  login(nameInform : string , passwordInform : string){

    let json = {name : nameInform , password : passwordInform};
    let jsonString = JSON.stringify(json);

    this.http.post(this.dataService.url + "/LoginAdmin" , jsonString ,{observe: 'response'})
    .subscribe((response : any)=>{

      let responseBody = response.body;
      this.userLocal = Localuser.toUser(JSON.stringify(responseBody));
      this.dataService.userLocal = this.userLocal;
      console.log(JSON.stringify(this.userLocal));
      localStorage.setItem("admin", JSON.stringify(this.userLocal));
      console.log(this.userLocal);
      this.router.navigateByUrl("/shop_admin");

    });
  }





}
