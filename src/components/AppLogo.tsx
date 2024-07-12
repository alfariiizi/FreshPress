import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type Props = {
  className?: string;
};

export default function AppLogo({ className }: Props) {
  return (
    <div
      className={cn(
        buttonVariants(),
        "font-display hover:bg-primary h-auto w-auto rounded-none px-2 py-1 text-xl font-semibold",
        className,
      )}
    >
      FP
    </div>
  );
}
