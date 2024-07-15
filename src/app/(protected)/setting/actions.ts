"use server";

import { db } from "@/server/db";

type UpdateuserForm = {
  id: string;
  name: string;
  email: string;
  birthPlace: string;
  birthDate: Date;
  // password: string;
};

export async function updateUser(input: UpdateuserForm) {
  await db.user.update({
    where: { id: input.id },
    data: {
      id: input.id,
      name: input.name,
      email: input.email,
      birthDate: input.birthDate,
      birthPlace: input.birthPlace,
      // password: hashPassword(input.password),
    },
  });
}
