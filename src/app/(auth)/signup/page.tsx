import AppLogoWithTitle from "@/components/AppLogoWithTitle";
import { MaxWidthDiv } from "@/components/max-width-div";
import React from "react";
import Form from "./Form";
import Link from "next/link";

export default function page() {
  return (
    <MaxWidthDiv className="my-10 flex h-dvh items-center justify-center">
      <div className="border-primary/30 border-2 px-8 py-4">
        <Link href="/">
          <AppLogoWithTitle className="justify-center" />
        </Link>
        <h1 className="my-6 flex items-center justify-center text-center text-xl font-semibold">
          Create your account
        </h1>
        <Form />
      </div>
    </MaxWidthDiv>
  );
}
