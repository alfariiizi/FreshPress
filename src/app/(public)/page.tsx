import { MaxWidthDiv } from "@/components/max-width-div";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <MaxWidthDiv className="mt-10 flex gap-20">
      <div className="flex w-3/4 flex-col gap-20">
        <HeadlineNews />
        <OtherNews />
      </div>
      <LatestNews className="w-1/4" />
    </MaxWidthDiv>
  );
}

function HeadlineNews() {
  return (
    <div className="flex gap-4">
      <div className="max-w-[500px] space-y-4">
        <h2 className="text-wrap text-5xl font-semibold">
          Apple will allow developers access to its NFC technology, avoiding an
          EU fine
        </h2>
        <p className="">
          After four years of back and forth, the European Union and Apple have
          finally come to an agreement on the latter&apos;s tap-and-go
          technology. The European Commission announced Apple made &quot;legally
          binding&quot; commitments to provide developers with their Near-Field
          Co…
        </p>
        <Link
          href="#"
          className={cn(
            buttonVariants({
              variant: "link",
              className: "h-fit w-fit p-0",
            }),
            "p-0 underline",
          )}
        >
          Read more
        </Link>
      </div>
      <div className="bg-primary aspect-video h-[400px] w-[800px]" />
    </div>
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
