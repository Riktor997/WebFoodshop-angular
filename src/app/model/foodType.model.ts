// To parse this data:
//
//   import { Convert } from "./file";
//
//   const foodType = Convert.toFoodType(json);

export interface FoodType {
  fid:  number;
  name: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toFoodType(json: string): FoodType[] {
      return JSON.parse(json);
  }

  public static foodTypeToJson(value: FoodType[]): string {
      return JSON.stringify(value);
  }
}
