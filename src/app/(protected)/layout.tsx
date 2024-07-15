import { Navbar, NavbarLogo, NavbarRight } from "@/components/navbar";
import { navbarHeight } from "@/components/navbar/shared";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import Sidebar from "./_components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const session = await getServerAuthSession();

  console.warn("DEBUGPRINT[1]: layout.tsx:11 (before console.debug(session))");
  console.debug({ session });
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col">
      <Navbar isFixed isFullWidth>
        <NavbarLogo />
        <NavbarRight className="flex gap-2 font-medium">
          <CgProfile className="size-5" /> {session.user.name}
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
