import { MaxWidthDiv } from "@/components/max-width-div";
import { capitalizeAll } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { getCategoryNews } from "./query";
import LatestNews from "../../_components/LatestNews";
import Image from "next/image";
import SavedButton from "@/app/_components/saved-button";

type Props = {
  params: {
    category: string;
  };
};

export default function page({ params: { category } }: Props) {
  return (
    <MaxWidthDiv smallPadding>
      <h2 className="mt-6 text-4xl font-semibold">{capitalizeAll(category)}</h2>
      <div className="my-4 flex w-full flex-col gap-20 md:flex-row">
        <OtherNews category={category} />
        <LatestNews />
      </div>
    </MaxWidthDiv>
  );
}

async function OtherNews({ category }: { category: string }) {
  const data = await getCategoryNews(category);

  return (
    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3">
      {data.map((news, idx) => (
        <li key={`news-${idx + 1}`} className="">
          <div>
            <div className="relative aspect-video w-full bg-cover bg-clip-content">
              <Image
                src={news.urlToImage}
                alt={news.title}
                width={800}
                height={400}
                className="h-full w-full rounded-[5px] bg-cover object-cover"
              />
              <SavedButton
                data={{
                  title: news.title,
                  description: news?.description,
                  imageUrl: news?.urlToImage,
                  content: news?.content,
                  url: news?.url,
                  author: news?.author,
                  publishedAt: news?.publishedAt,
                }}
                className="absolute right-2 top-2"
              />
            </div>
          </div>
          <Link href={news.url} target="_blank">
            <h3 className="mt-2 text-lg font-semibold">{news.title}</h3>
          </Link>
          <p>{news.description}</p>
        </li>
      ))}
    </ul>
  );
}
