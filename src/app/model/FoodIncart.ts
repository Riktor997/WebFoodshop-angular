// To parse this data:
//
//   import { Convert } from "./file";
//
//   const foodincart = Convert.toFoodincart(json);

export interface Foodincart {
  food_id:     number;
  order_id:    null;
  customer_id: number;
  image:       string;
  food_name:   string;
  price:       number;
  pay:         number;
  amount:      number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toFoodincart(json: string): Foodincart[] {
      return JSON.parse(json);
  }

  public static foodincartToJson(value: Foodincart[]): string {
      return JSON.stringify(value);
  }
}
