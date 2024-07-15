"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { updateUser } from "./actions";
import { InputField } from "@/components/ui/input-field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// yup schema
export const CreateUserSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email().required("Email is a required field"),
  birthPlace: yup.string().required("Birth place is a required field"),
  birthDate: yup.string().required("Birth date is a required field"),
  // password: yup.string().required("Password is required"),
});

type Props = {
  userId: string;
  initialData: {
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    // password?: string | null;
    birthPlace?: string;
    birthDate?: Date;
  };
};

export default function Form({ userId, initialData }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    // @ts-ignore
    resolver: yupResolver(CreateUserSchema),
    defaultValues: {
      name: initialData.name,
      birthPlace: initialData.birthPlace,
      // password: initialData.password,
      birthDate: initialData.birthDate?.toISOString().split("T")[0],
      email: initialData.email,
    },
  });

  return (
    <form
      className="mt-10 flex flex-col gap-6"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit(async (data) => {
          await updateUser({
            // @ts-ignore
            name: data.name!,
            email: data.email!,
            // password: data.password!,
            birthPlace: data.birthPlace!,
            birthDate: new Date(data.birthDate!),
            id: userId,
          });
        })(e);
        router.refresh();
      }}
    >
      <InputField label="Nama" id="name" errorMessage={errors.name?.message}>
        <Input required type="text" id="name" {...register("name")} />
      </InputField>
      <InputField label="Email" id="email" errorMessage={errors.email?.message}>
        <Input disabled type="email" id="email" {...register("email")} />
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
        <Input
          required
          type="date"
          id="born-date"
          {...register("birthDate")}
          defaultValue={initialData.birthDate?.toISOString().split("T")[0]}
        />
      </InputField>
      <Button isLoading={isSubmitting} className="w-fit">
        Submit
      </Button>
    </form>
  );
}
