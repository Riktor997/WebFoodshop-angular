// To parse this data:
//
//   import { Convert } from "./file";
//
//   const foodOrder = Convert.toFoodOrder(json);

export interface FoodOrder {

  order_id:    number;
  customer_id: number;
  status:      number;
  sdate:       string;
  fdate:       string;
  Totalprice:    number;
  name_customer: string;
  phone:       number;
  address:     string;
  food_name:    string;
  image:        string;
  price:        number;
  pay:          number;
  amount:       number;

}

// Converts JSON strings to/from your types
export class Convert {
  public static toFoodOrder(json: string): FoodOrder[] {
      return JSON.parse(json);
  }

  public static foodOrderToJson(value: FoodOrder[]): string {
      return JSON.stringify(value);
  }
}
