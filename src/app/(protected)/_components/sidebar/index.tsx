import { navbarHeight } from "@/components/navbar/shared";
import React from "react";

export default function index() {
  return (
    <aside
      style={{
        height: `calc(100dvh - ${navbarHeight} - 1px)`,
      }}
      className="w-full max-w-[200px] border-r border-r-gray-300"
    >
      index
    </aside>
  );
}
