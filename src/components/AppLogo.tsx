import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function AppLogo({ className }: Props) {
  return (
    <Image
      src="/images/app-logo.png"
      alt="App Logo"
      width={300}
      height={300}
      className="size-12 rounded-sm"
      draggable={false}
    />
  );
}
