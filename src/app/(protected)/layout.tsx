import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const session = await getServerAuthSession();
  if (!session) {
    redirect("/login");
  }

  return <div>{children}</div>;
}
