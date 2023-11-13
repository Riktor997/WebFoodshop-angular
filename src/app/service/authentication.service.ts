import { Injectable } from '@angular/core';
import { loginCustomer } from '../model/loginCustomer';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http : HttpClient) { }

}
