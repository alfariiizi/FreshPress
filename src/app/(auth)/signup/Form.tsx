"use client";

import { Button } from "@/components/ui/button";
import { Input, InputPassword } from "@/components/ui/input";
import { InputField } from "@/components/ui/input-field";
import Link from "next/link";
import React from "react";

export default function Form() {
  return (
    <form className="mt-10 flex flex-col gap-6">
      <InputField label="Email" id="email">
        <Input required type="email" id="email" />
      </InputField>
      <InputField label="Password" id="password">
        <InputPassword required id="password" />
      </InputField>
      <InputField label="API Key" id="api-key">
        <Input required type="text" id="api-key" />
      </InputField>
      <Button>Submit</Button>
      <p>
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold underline underline-offset-2"
        >
          Login to your account
        </Link>
        .
      </p>
    </form>
  );
}
