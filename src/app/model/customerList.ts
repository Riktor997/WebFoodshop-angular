// To parse this data:
//
//   import { Convert } from "./file";
//
//   const customerList = Convert.toCustomerList(json);

export interface CustomerList {
  customer_id: number;
  name:        string;
  phone:       string;
  address:     string;
  password:    string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCustomerList(json: string): CustomerList[] {
      return JSON.parse(json);
  }

  public static customerListToJson(value: CustomerList[]): string {
      return JSON.stringify(value);
  }
}
