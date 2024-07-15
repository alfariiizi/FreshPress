import { buttonVariants } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "./logout-button";
import { MdOutlineSettings } from "react-icons/md";

export default async function NavbarAccount() {
  const session = await getServerAuthSession();

  return (
    <Menubar className="h-auto border-0 px-0 py-0">
      <MenubarMenu>
        <MenubarTrigger
          className={buttonVariants({
            variant: "ghost",
            className:
              "flex h-full cursor-pointer items-center gap-2 border-0 px-2 py-1",
          })}
        >
          <CgProfile className="size-7 rounded-full text-gray-600" />
          <p className="text-sm font-medium text-[#222222]">
            {session?.user.name}
          </p>
        </MenubarTrigger>
        <MenubarContent className="z-[150]">
          <MenubarItem asChild>
            <Link
              href="/settings"
              className="inline-flex w-full cursor-pointer items-center gap-3 text-gray-600 duration-150 focus:text-gray-700"
            >
              <MdOutlineSettings className="size-5" />
              Settings
            </Link>
          </MenubarItem>
          <MenubarItem asChild className="">
            <LogoutButton />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
