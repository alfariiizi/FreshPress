"use client";

import { MaxWidthDiv } from "@/components/max-width-div";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";

export default function SearchInput() {
  return (
    <MaxWidthDiv className="flex items-center gap-2">
      <Input
        icon={<LuSearch />}
        type="search"
        className="h-8 max-w-[514px]"
        placeholder="Search News"
      />
    </MaxWidthDiv>
  );
}
