import { buttonVariants } from "@/components/ui/button";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import React from "react";

export default async function AuthButton() {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <>
        <Link
          href="/register"
          className={buttonVariants({ variant: "outline" })}
        >
          Register
        </Link>
        <Link href="/login" className={buttonVariants({ variant: "default" })}>
          Login
        </Link>
      </>
    );
  }

  return <div>AuthButton</div>;
}
