import { Component } from '@angular/core';
import { Convert as registeradmin ,  RegisterAdmin } from 'src/app/model/RegisterAdmin';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Convert as Localuser ,  User } from 'src/app/model/user';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent {

  Register = Array<RegisterAdmin>();
  userLocal = Array<User>();
  constructor(private http : HttpClient,private dataService : DataService , private router : Router){
  }

  addRegister(name:string,password:string){

    if(name == "" || password == "" ){
      window.alert('กรุณากรอกให้ครบ!');
    }
    else
    {
      console.log(name + password );
      window.alert('ลงทะเบียนเสร็จสิ้น!');
    }

    let jsonObj = {
      password : password,
      name : name,
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.url + "/RegisterAdmin" , jsonString,
    {observe: 'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
    });

    this.router.navigateByUrl('/login_admin');



  }
}
