import { cn } from "@/lib/utils";
import { MaxWidthDiv } from "../max-width-div";
import { navbarHeight } from "./shared";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

type NavbarProps = {
  children: React.ReactNode;
};

export function Navbar({ children }: NavbarProps) {
  return (
    <nav
      style={{
        height: navbarHeight,
      }}
      className="bg-background/60 text-foreground border-primary/20 sticky left-0 top-0 z-[1000] flex w-full border-b backdrop-blur-xl"
    >
      <MaxWidthDiv className="flex w-full items-center justify-between">
        {children}
      </MaxWidthDiv>
    </nav>
  );
}

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* <AppIconSvg /> */}
      <div
        className={buttonVariants({
          className:
            "font-display hover:bg-primary h-auto w-auto rounded-none p-1 text-xl",
        })}
      >
        FP
      </div>
      <h1 className="font-display text-2xl font-semibold">FreshPress</h1>
    </Link>
  );
}

type NavRightProps = {
  children: React.ReactNode;
  className?: string;
};

export function NavbarRight({ className, children }: NavRightProps) {
  return <div className={cn("flex items-center", className)}>{children}</div>;
}
