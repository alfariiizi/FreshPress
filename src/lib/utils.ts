import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  // eslint-disable-next-line no-unsafe-optional-chaining
  return str?.charAt(0)?.toUpperCase() + (str || "")?.slice(1) ?? "";
}

export function capitalizeAll(str?: string) {
  return str
    ?.split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}
