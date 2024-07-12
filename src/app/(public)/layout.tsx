import { Navbar, NavbarLogo, NavbarRight } from "@/components/navbar";
import React from "react";
import AuthButton from "./_components/AuthButton";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="w-full">
      <Navbar>
        <NavbarLogo />
        <NavbarRight className="gap-3">
          <AuthButton />
        </NavbarRight>
      </Navbar>
      {children}
    </div>
  );
}
