import { cn } from "@/lib/utils";
import { MaxWidthDiv } from "../max-width-div";
import { navbarHeight } from "./shared";
import Link from "next/link";
import AppLogo from "../AppLogo";

type NavbarProps = {
  children: React.ReactNode;
  isFullWidth?: boolean;
  isFixed?: boolean;
};

export function Navbar({ children, isFixed, isFullWidth }: NavbarProps) {
  return (
    <nav
      style={{
        height: navbarHeight,
      }}
      className={cn(
        "bg-background/60 text-foreground border-primary/20 sticky left-0 top-0 z-[1000] flex w-full border-b border-b-zinc-300 backdrop-blur-xl",
        isFixed && "fixed",
      )}
    >
      <MaxWidthDiv
        className={cn(
          "flex w-full items-center justify-between",
          isFullWidth && "max-w-full",
        )}
      >
        {children}
      </MaxWidthDiv>
    </nav>
  );
}

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <AppLogo />
      <h1 className="font-display text-2xl font-semibold">Star Library</h1>
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
