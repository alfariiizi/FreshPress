"use client";

import { TooltipArrow } from "@radix-ui/react-tooltip";
import * as React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi";

import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  wrapperClassName?: string;
  tooltip?: {
    header?: string;
    content?: string;
    // content className
    className?: string;
  };
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ wrapperClassName, className, type, icon, tooltip, ...props }, ref) => {
    return (
      <div className={cn("relative flex w-full", wrapperClassName)}>
        {icon ? (
          <div className="absolute left-3 top-2 h-full w-5 text-[#667085] duration-150">
            {icon}
          </div>
        ) : null}
        <input
          type={type}
          className={cn(
            "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full min-w-[378px] rounded-md border border-[#D0D5DD] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-10",
            tooltip && "pr-10",
            "border-[#D0D5DD]",
            className,
          )}
          ref={ref}
          {...props}
        />
        {tooltip?.content && (
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger
                tabIndex={-1}
                className={cn(
                  "hover:text-black-400 absolute right-3 h-full w-5 text-[#667085] duration-150",
                  !tooltip.content && "hidden",
                )}
              >
                <AiOutlineQuestionCircle className="h-full w-full font-bold" />
              </TooltipTrigger>
              <TooltipContent
                className={cn(
                  "flex max-w-xs flex-col gap-1 shadow-lg",
                  tooltip.className,
                )}
              >
                {tooltip?.header && (
                  <p className="text-sm font-semibold">{tooltip.header}</p>
                )}
                <p className="text-sm">{tooltip.content}</p>
                <TooltipArrow className="fill-white" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export type InputEmailProps = Omit<InputProps, "icon"> & {
  showIcon?: boolean;
};

const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  ({ showIcon, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        icon={showIcon ? <HiOutlineMail className="h-full w-full" /> : null}
        {...props}
      />
    );
  },
);
InputEmail.displayName = "InputEmail";

export type InputPasswordProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  icon?: React.ReactNode;
};

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, icon, ...props }, ref) => {
    const [isHide, setIsHide] = React.useState(true);

    return (
      <div className="relative flex">
        <div className="absolute left-3 h-full w-5 text-[#667085] duration-150">
          {icon}
        </div>
        <input
          type={isHide ? "password" : "text"}
          className={cn(
            "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full min-w-[378px] rounded-md border border-[#D0D5DD] px-3 py-2 pr-10 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "border-[#D0D5DD]",
            className,
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          className="flex cursor-pointer items-center justify-around"
          tabIndex={-1}
          onClick={() => {
            setIsHide((prev) => !prev);
          }}
        >
          {isHide ? (
            <HiOutlineEyeOff className="absolute right-3 h-full w-5 text-[#667085] duration-150 hover:text-gray-800" />
          ) : (
            <HiOutlineEye className="absolute right-3 h-full w-5 text-[#667085] duration-150 hover:text-gray-800" />
          )}
        </button>
      </div>
    );
  },
);
InputPassword.displayName = "InputPassword";

export { Input, InputEmail, InputPassword };
