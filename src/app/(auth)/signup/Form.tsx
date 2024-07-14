"use client";

import { Button } from "@/components/ui/button";
import { Input, InputPassword } from "@/components/ui/input";
import { InputField } from "@/components/ui/input-field";
import Link from "next/link";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAction } from "next-safe-action/hooks";
import { createAccount } from "./actions";
import { useRouter } from "next/navigation";

// type FormInputType = {
//   name: string
//   email: string
//   birthPlace: string
//   birthDate: Date
//   password: string
//   passwordConfirmation: string
// }

// yup schema
export const CreateUserSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email().required("Email is a required field"),
  birthPlace: yup.string().required("Birth place is a required field"),
  birthDate: yup.date().required("Birth date is a required field"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    // @ts-ignore
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(CreateUserSchema) });
  // const { executeAsync, isExecuting } = useAction(createAccount, {
  //   onSuccess({ data }) {
  //     if (data) {
  //       router.push("/login");
  //     }
  //   },
  // });

  return (
    <form
      className="mt-10 flex flex-col gap-6"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit(async (data) => {
          const user = await createAccount({
            name: data.name,
            email: data.email,
            password: data.password,
            birthPlace: data.birthPlace,
            birthDate: data.birthDate,
          });
          if (user) {
            router.push("/login");
          }
          // await executeAsync({
          //   ...data,
          // });
        })(e);
      }}
    >
      <InputField label="Nama" id="name" errorMessage={errors.name?.message}>
        <Input required type="text" id="name" {...register("name")} />
      </InputField>
      <InputField label="Email" id="email" errorMessage={errors.email?.message}>
        <Input required type="email" id="email" {...register("email")} />
      </InputField>
      <InputField
        label="Tempat Lahir"
        id="born-place"
        errorMessage={errors.birthPlace?.message}
      >
        <Input
          required
          type="text"
          id="born-place"
          {...register("birthPlace")}
        />
      </InputField>
      <InputField
        label="Tanggal Lahir"
        id="born-date"
        errorMessage={errors.birthDate?.message}
      >
        <Input required type="date" id="born-date" {...register("birthDate")} />
      </InputField>
      <InputField
        label="Password"
        id="password"
        errorMessage={errors.password?.message}
      >
        <InputPassword required id="password" {...register("password")} />
      </InputField>
      <InputField
        label="Konfirmasi Password"
        id="password-confirm"
        errorMessage={errors.passwordConfirmation?.message}
      >
        <InputPassword
          required
          id="password-confirm"
          {...register("passwordConfirmation")}
        />
      </InputField>
      <Button isLoading={isSubmitting}>Submit</Button>
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
