import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

export const categoryList = [
  {
    name: "Bussiness",
    url: "/bussiness",
  },
  {
    name: "Sport",
    url: "/sport",
  },
  {
    name: "Travel",
    url: "/travel",
  },
  {
    name: "Culture",
    url: "/culture",
  },
];

export default function Categories() {
  return (
    <menu className="flex gap-3">
      {categoryList.map((category) => (
        <li key={category.name}>
          <Link
            href={`/category${category.url}`}
            className={buttonVariants({ variant: "ghost" })}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </menu>
  );
}
