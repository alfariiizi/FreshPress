import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  smallPadding?: boolean;
};

export function MaxWidthDiv({
  smallPadding = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      style={{
        scrollbarGutter: "stable",
        // overflowY: "auto",
      }}
      className={cn(
        "mx-auto w-full max-w-[1440px] px-8 sm:px-10 md:px-12",
        smallPadding && "px-4 sm:px-6 md:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
