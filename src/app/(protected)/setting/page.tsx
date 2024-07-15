import React from "react";
import Form from "./Form";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { db } from "@/server/db";
import Link from "next/link";

export default async function page() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }

  const userData = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  return (
    <div className="space-y-4">
      <Link href="/dashboard" className="underline underline-offset-2">
        Back to dashboard
      </Link>
      <h2 className="font-display text-3xl font-medium">User Preference</h2>
      <Form
        userId={session.user.id}
        data={{
          name: userData?.name,
          birthPlace: userData?.birthPlace,
          birthDate: userData?.birthDate,
          // password: userData?.password,
          email: userData?.email,
          image: userData?.image,
          emailVerified: userData?.emailVerified,
        }}
      />
    </div>
  );
}
