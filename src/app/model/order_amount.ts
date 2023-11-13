// To parse this data:
//
//   import { Convert } from "./file";
//
//   const orderAmount = Convert.toOrderAmount(json);

export interface OrderAmount {
  userLocal_id: number;
  food_id:      number;
  amount:       number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrderAmount(json: string): OrderAmount[] {
      return JSON.parse(json);
  }

  public static orderAmountToJson(value: OrderAmount[]): string {
      return JSON.stringify(value);
  }
}
