import { Navbar, NavbarLogo, NavbarRight } from "@/components/navbar";
import React from "react";
import AuthButton from "./_components/AuthButton";
import Categories from "./_components/Categories";
import SearchInput from "./_components/SearchInput";
import Footer from "@/components/footer";
import MobileMenu from "./_components/MobileMenu";

export const revalidate = 1800;

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="flex w-full flex-col gap-5">
      <Navbar>
        <NavbarLogo />
        <Categories />
        <NavbarRight className="hidden gap-3 md:flex">
          <AuthButton />
        </NavbarRight>
        <MobileMenu />
      </Navbar>
      <div className="relative flex flex-col gap-4">
        <SearchInput />
        {children}
      </div>
      <Footer />
    </div>
  );
}
