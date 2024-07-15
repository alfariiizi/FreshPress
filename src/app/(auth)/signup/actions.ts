"use server";

import { hashPassword } from "@/lib/hash-password";
import { db } from "@/server/db";

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
