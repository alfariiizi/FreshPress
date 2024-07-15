import { Navbar, NavbarLogo, NavbarRight } from "@/components/navbar";
import { navbarHeight } from "@/components/navbar/shared";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";
import NavbarAccount from "./_components/navbar-account";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col">
      <Navbar isFixed isFullWidth>
        <NavbarLogo />
        <NavbarRight className="flex gap-2 font-medium">
          <NavbarAccount />
        </NavbarRight>
      </Navbar>
      <div
        className="flex"
        style={{
          marginTop: navbarHeight,
        }}
      >
        {/* <Sidebar /> */}
        <div className="relative w-full px-10 py-8">{children}</div>
      </div>
    </div>
  );
}
