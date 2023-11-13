// To parse this data:
//
//   import { Convert } from "./file";
//
//   const totalincart = Convert.toTotalincart(json);

export interface Totalincart {
  totalprice: number;
  COD : number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toTotalincart(json: string): Totalincart[] {
      return JSON.parse(json);
  }

  public static totalincartToJson(value: Totalincart[]): string {
      return JSON.stringify(value);
  }
}
