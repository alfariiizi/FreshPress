"use client";

import { MaxWidthDiv } from "@/components/max-width-div";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [search] = useQueryState("search", { defaultValue: "" });
  const [localSearch, setLocalSearch] = useState(search);
  const router = useRouter();

  return (
    <MaxWidthDiv className="flex items-center gap-2">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const searchParams = new URLSearchParams();
          searchParams.append("search", localSearch);
          router.push(`/?${searchParams.toString()}`);
        }}
      >
        <Input
          icon={<LuSearch />}
          type="search"
          name="search"
          className="h-8 w-full min-w-0 max-w-[514px]"
          placeholder="Search News"
          value={localSearch}
          onChange={(e) => {
            e.preventDefault();
            setLocalSearch(e.target.value);
          }}
        />
      </form>
    </MaxWidthDiv>
  );
}
