import { MaxWidthDiv } from "@/components/max-width-div";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { getAllNews } from "./query";
import Image from "next/image";
import LatestNews from "./_components/LatestNews";

export const revalidate = 1800;

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

async function HeadlineNews() {
  const headline = await getAllNews().then((d) => d[0]);

  return (
    <div className="flex gap-4">
      <div className="max-w-[500px] space-y-4">
        <h2
          title={headline?.title}
          className="line-clamp-4 text-wrap text-4xl font-semibold"
        >
          {headline?.title}
        </h2>
        <p className="">{headline?.description}</p>
        <Link
          href={headline!.url}
          target="_blank"
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
      {/* <div className="bg-primary aspect-video h-[400px] w-[800px]" /> */}
      <div className="aspect-auto h-[400px] w-[800px] bg-cover bg-clip-content">
        <Image
          src={headline!.urlToImage}
          alt={headline!.title}
          width={800}
          height={400}
          className="h-full w-full rounded-[5px] bg-cover object-cover"
        />
      </div>
    </div>
  );
}

async function OtherNews() {
  const data = await getAllNews().then((d) => d.slice(7, 18));

  return (
    <ul className="grid grid-cols-3 gap-8">
      {data.map((news, idx) => (
        <li key={`news-${idx + 1}`} className="">
          <Link target="_blank" href={news.url}>
            {/* <div className="bg-primary mx-auto aspect-video w-full" /> */}
            <div className="aspect-video w-full bg-cover bg-clip-content">
              <Image
                src={news.urlToImage}
                alt={news.title}
                width={800}
                height={400}
                className="h-full w-full rounded-[5px] bg-cover object-cover"
              />
            </div>
          </Link>
          <Link target="_blank" href={news.url}>
            <h3 className="mt-2 text-lg font-semibold">{news.title}</h3>
          </Link>
          <p>{news.description}</p>
        </li>
      ))}
    </ul>
  );
}
