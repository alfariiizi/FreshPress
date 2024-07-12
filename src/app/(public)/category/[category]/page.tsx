import { MaxWidthDiv } from "@/components/max-width-div";
import { capitalizeAll, cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

export default function page({ params: { category } }: Props) {
  return (
    <MaxWidthDiv>
      <h2 className="mt-6 text-4xl font-semibold">{capitalizeAll(category)}</h2>
      <div className="my-4 flex w-full gap-20">
        <OtherNews />
        <LatestNews />
      </div>
    </MaxWidthDiv>
  );
}

const otherNewsData = [
  {
    title:
      "Apple will allow developers access to its NFC technology, avoiding an EU fine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fringilla massa vel convallis. Aliquam nunc mauris, vestibulum et dolor vel, egestas eleifend tortor. Donec molestie tincidunt libero.",
  },
  {
    title:
      "Apple will allow developers access to its NFC technology, avoiding an EU fine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title:
      "Apple will allow developers access to its NFC technology, avoiding an EU fine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fringilla massa vel convallis. Aliquam nunc mauris, vestibulum et dolor vel, egestas eleifend tortor. Donec molestie tincidunt libero.",
  },
  {
    title:
      "Apple will allow developers access to its NFC technology, avoiding an EU fine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fringilla massa vel convallis. Aliquam nunc mauris, vestibulum et dolor vel, egestas eleifend tortor. Donec molestie tincidunt libero.",
  },
  {
    title:
      "Apple will allow developers access to its NFC technology, avoiding an EU fine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fringilla massa vel convallis. Aliquam nunc mauris, vestibulum et dolor vel, egestas eleifend tortor. Donec molestie tincidunt libero.",
  },
];

function OtherNews() {
  return (
    <ul className="grid grid-cols-3 gap-8">
      {otherNewsData.map((news, idx) => (
        <li key={`news-${idx + 1}`} className="">
          <Link href="#">
            <div className="bg-primary mx-auto aspect-video w-full" />
          </Link>
          <Link href="#">
            <h3 className="mt-2 text-lg font-semibold">{news.title}</h3>
          </Link>
          <p>{news.description}</p>
        </li>
      ))}
    </ul>
  );
}

function LatestNews({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <div className="border-b-primary mb-4 border-b-2 text-xl font-semibold">
        <h2 className="bg-primary text-background w-fit px-2 py-1">
          Latest News
        </h2>
      </div>
      <ul className="flex flex-col gap-4">
        {otherNewsData.map((news, idx) => (
          <li key={`news-${idx + 1}`}>
            <Link href="#">
              <h3 className="font-semibold">{news.title}</h3>
            </Link>
            <p className="text-sm">{news.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
