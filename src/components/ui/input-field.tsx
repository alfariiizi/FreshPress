import React from "react";

import { cn } from "@/lib/utils";

import { Label } from "./label";

type Props = {
  id?: string;
  label: string;
  description?: string;
  className?: string;
  errorMessage?: string;
  headingClassName?: string;
  /**
   * The value can be Input Component or Textarea Component
   */
  children: React.ReactNode;
};

function InputField(props: Props) {
  return (
    <div className={cn("flex flex-col gap-2", props.className)}>
      <div className={cn("flex flex-col gap-1", props.headingClassName)}>
        <Label htmlFor={props.id}>{props.label}</Label>
        {props.description && (
          <p className="text-sm text-[#4F4F4F]">{props.description}</p>
        )}
      </div>
      {props.children}
      {props.errorMessage && (
        <p className="text-wrap text-sm text-red-700">{props.errorMessage}</p>
      )}
    </div>
  );
}

export { InputField };
