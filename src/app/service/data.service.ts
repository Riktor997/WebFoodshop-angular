import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from '../model/food.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:80/Foodshop';
  FoodType : any; //insert new data
  Foods : any; //insert new dTTata
  selectedFoodType : any;  //edit detail
  selectedFood : any;
  AddTocart : any;
  userLocal : any;
  cusID : any;
  oid : any;
  constructor() {}


}
