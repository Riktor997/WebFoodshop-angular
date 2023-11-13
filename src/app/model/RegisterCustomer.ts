// To parse this data:
//
//   import { Convert } from "./file";
//
//   const registerCustomer = Convert.toRegisterCustomer(json);

export interface RegisterCustomer {
  customer_id: number;
  name:        string;
  phone:       string;
  address:     string;
  password:    string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toRegisterCustomer(json: string): RegisterCustomer[] {
      return JSON.parse(json);
  }

  public static registerCustomerToJson(value: RegisterCustomer[]): string {
      return JSON.stringify(value);
  }
}
