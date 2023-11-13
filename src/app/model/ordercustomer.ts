// To parse this data:
//
//   import { Convert } from "./file";
//
//   const foodOrder = Convert.toFoodOrder(json);

export interface FoodOrderCustomer {

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
  public static toFoodOrderCustomer(json: string): FoodOrderCustomer[] {
      return JSON.parse(json);
  }

  public static FoodOrderCustomerToJson(value: FoodOrderCustomer[]): string {
      return JSON.stringify(value);
  }
}
