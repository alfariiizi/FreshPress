"use client";

import { Button } from "@/components/ui/button";
import { Input, InputPassword } from "@/components/ui/input";
import { InputField } from "@/components/ui/input-field";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  password: yup.string().required("Password is required"),
});

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  return (
    <form
      className="mt-10 flex flex-col gap-6"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit(async (data) => {
          const res = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
          });
          if (res?.ok) {
            router.push("/dashboard");
          }
        })(e);
      }}
    >
      <InputField label="Email" id="email" errorMessage={errors.email?.message}>
        <Input required type="email" id="email" {...register("email")} />
      </InputField>
      <InputField
        label="Password"
        id="password"
        errorMessage={errors.password?.message}
      >
        <InputPassword required id="password" {...register("password")} />
      </InputField>
      <Button isLoading={isSubmitting}>Submit</Button>
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
