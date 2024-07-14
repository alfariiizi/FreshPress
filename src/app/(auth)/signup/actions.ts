"use server";

import { SHA256 as sha256 } from "crypto-js";
import { db } from "@/server/db";

const hashPassword = (value: string) => {
  return sha256(value).toString();
};

type CreateAccountForm = {
  name: string;
  email: string;
  birthPlace: string;
  birthDate: Date;
  password: string;
};

export async function createAccount(input: CreateAccountForm) {
  const user = await db.user.create({
    data: {
      name: input.name,
      email: input.email,
      password: hashPassword(input.password),
      birthDate: input.birthDate,
      birthPlace: input.birthPlace,
    },
  });
  return user;
}

// export const createAccount = actionClient
//   .schema(CreateUserSchema)
//   .action(async ({ parsedInput, ctx }) => {
//     const { name, email, birthPlace, birthDate, password } = parsedInput;
//     console.warn("DEBUGPRINT[1]: actions.ts:15 (before console.debug(here);)");
//     console.debug("here");
//     const user = await ctx.db.user.create({
//       data: {
//         name,
//         email,
//         birthPlace,
//         birthDate,
//         password: hashPassword(password as string),
//       },
//     });
//     return user;
//   });
