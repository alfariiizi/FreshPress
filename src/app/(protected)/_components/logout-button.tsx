"use client";

import { signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await signOut();
      }}
      type="submit"
      className="bg-background hover:bg-destructive hover:text-destructive-foreground flex h-full w-full cursor-default items-center justify-start gap-3 rounded px-2 py-1.5 text-sm text-gray-600 duration-150 focus:bg-red-500"
    >
      <TbLogout className="size-5" /> Logout
    </button>
  );
}
