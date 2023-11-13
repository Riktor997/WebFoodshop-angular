// To parse this data:
//
//   import { Convert } from "./file";
//
//   const food = Convert.toFood(json);

export interface Food {
  fid:       number;
  food_name: string;
  price:     number;
  image:     string;
  type_id:   number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toFood(json: string): Food[] {
      return JSON.parse(json);
  }

  public static foodToJson(value: Food[]): string {
      return JSON.stringify(value);
  }
}
