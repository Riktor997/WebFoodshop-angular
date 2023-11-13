import { Component } from '@angular/core';
import { Convert as RegisCus ,RegisterCustomer } from 'src/app/model/RegisterCustomer';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent {

  check = false;
  Register = Array<RegisterCustomer>();
  ngForm = false;

  constructor(private formBuilder: FormBuilder,
  private http : HttpClient,private data : DataService , private router : Router) {

  }

  checkData(){

  }

  addRegister(name:string,phone:string,address:string,password:string){

    if(name == "" || password == "" || phone == "" || address == ""){
      window.alert('กรุณากรอกให้ครบ!');
    }
    else
    {
      console.log(name + password + phone + address);
      window.alert('ลงทะเบียนเสร็จสิ้น!');
    }

    let jsonObj = {
      name : name,
      phone : phone,
      address : address,
      password : password
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.url + "/RegisterCustomer" , jsonString,
    {observe: 'response'}).subscribe((response)=>{
      // console.log(JSON.stringify(response.status));
      // console.log(JSON.stringify(response.body));
    });

    this.router.navigateByUrl('/login_customer');



  }



}
