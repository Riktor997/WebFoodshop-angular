// To parse this data:
//
//   import { Convert } from "./file";
//
//   const registerAdmin = Convert.toRegisterAdmin(json);

export interface RegisterAdmin {
  userID:   number;
  password: number;
  name:     string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toRegisterAdmin(json: string): RegisterAdmin[] {
      return JSON.parse(json);
  }

  public static registerAdminToJson(value: RegisterAdmin[]): string {
      return JSON.stringify(value);
  }
}
