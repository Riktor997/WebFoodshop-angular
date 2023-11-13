import { Injectable } from '@angular/core';
import { Food } from '../model/food.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsFood: Food[] = [];

  constructor() { }

  addToCart(foods: Food) {
    this.itemsFood.push(foods);
  }

  getItems() {
    return this.itemsFood;
  }

  ItemsLength(){
    return this.itemsFood.length;
  }

  clearCart() {
    this.itemsFood = [];
    return this.itemsFood;
  }

  removeItem(index: number){
    this.itemsFood.splice(index, 1);
  }
}
