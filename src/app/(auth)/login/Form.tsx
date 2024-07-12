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
        <Input type="email" id="email" />
      </InputField>
      <InputField label="Password" id="password">
        <InputPassword id="password" />
      </InputField>
      <Button>Submit</Button>
      <p>
        Don&apos; have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold underline underline-offset-2"
        >
          Create account
        </Link>
        .
      </p>
    </form>
  );
}
