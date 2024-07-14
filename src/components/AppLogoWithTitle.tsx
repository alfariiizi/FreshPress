import React from "react";
import AppLogo from "./AppLogo";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  light?: boolean;
};

export default function AppLogoWithTitle({ light, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <AppLogo
        className={cn(
          light
            ? "bg-primary-foreground text-primary"
            : "bg-primary text-primary-foreground",
        )}
      />
      <h2
        className={cn(
          "font-display text-2xl font-semibold",
          !light ? "text-primary-foreground" : "text-primary",
        )}
      >
        Star Library
      </h2>
    </div>
  );
}
