import { categoryList } from "@/app/(public)/_components/Categories";
import AppLogo from "./AppLogo";
import { MaxWidthDiv } from "./max-width-div";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20 py-14">
      <MaxWidthDiv className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <AppLogo className="bg-primary-foreground text-primary" />
            <h2 className="font-display text-2xl font-semibold">
              Star Library
            </h2>
          </div>
          <ul className="flex items-center gap-5">
            {categoryList.map((category) => (
              <li key={category.name}>
                <Link href={`/category${category.url}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="self-end text-sm">
          Copyright 2024 FreshPress. All rights reserved.
        </p>
      </MaxWidthDiv>
    </footer>
  );
}
