export interface loginCustomer {
  name:        string;
  password:    string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static tologinCustomer(json: string): loginCustomer[] {
      return JSON.parse(json);
  }

  public static loginCustomerToJson(value: loginCustomer[]): string {
      return JSON.stringify(value);
  }
}
