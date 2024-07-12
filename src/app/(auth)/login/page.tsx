import AppLogoWithTitle from "@/components/AppLogoWithTitle";
import { MaxWidthDiv } from "@/components/max-width-div";
import React from "react";
import Form from "./Form";

export default function page() {
  return (
    <MaxWidthDiv className="flex h-dvh items-center justify-center">
      <div className="border-primary/30 border-2 px-8 py-4">
        <AppLogoWithTitle className="justify-center" />
        <Form />
      </div>
    </MaxWidthDiv>
  );
}
