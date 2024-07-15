import { SHA256 as sha256 } from "crypto-js";

export const hashPassword = (value: string) => {
  return sha256(value).toString();
};
