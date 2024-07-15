// "use server";
//
// import { db } from "@/server/db";
// import { revalidatePath } from "next/cache";
//
// type CreateAccountForm = {
//   name: string;
//   email: string;
//   birthPlace: string;
//   birthDate: Date;
//   password: string;
// };
//
// export async function createAccount(input: CreateAccountForm) {
//   const user = await db.user.findFirst({
// 		where:
//   });
//   revalidatePath("/dashboard");
//   return user;
// }
