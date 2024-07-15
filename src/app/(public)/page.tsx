import { MaxWidthDiv } from "@/components/max-width-div";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { getAllNews, getSearchNews } from "./query";
import Image from "next/image";
import LatestNews from "./_components/LatestNews";
import SavedButton from "../_components/saved-button";

type Props = {
  searchParams: {
    search?: string;
  };
};

export default function page({ searchParams: { search } }: Props) {
  if (search && search.length !== 0) {
    return (
      <MaxWidthDiv
        smallPadding
        className="mt-10 flex flex-col gap-20 md:flex-row"
      >
        <div className="flex w-full flex-col gap-20 md:w-3/4">
          <SearchNews search={search} />
        </div>
        <LatestNews className="w-full md:w-1/4" />
      </MaxWidthDiv>
    );
  }

  return (
    <MaxWidthDiv
      smallPadding
      className="mt-10 flex flex-col gap-20 md:flex-row"
    >
      <div className="flex w-full flex-col gap-20 md:w-3/4">
        <HeadlineNews />
        <OtherNews />
      </div>
      <LatestNews className="w-full md:w-1/4" />
    </MaxWidthDiv>
  );
}

async function HeadlineNews() {
  const headline = await getAllNews().then((d) => d[0]);

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
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
            "text-foreground p-0 underline",
          )}
        >
          Read more
        </Link>
      </div>
      <div className="relative aspect-auto max-h-[400px] max-w-[800px] bg-cover bg-clip-content">
        <Image
          src={headline!.urlToImage}
          alt={headline!.title}
          width={800}
          height={400}
          className="h-full w-full rounded-[5px] bg-cover object-cover"
        />
        <SavedButton
          data={{
            title: headline!.title,
            description: headline?.description,
            imageUrl: headline?.urlToImage,
            content: headline?.content,
            url: headline?.url,
            author: headline?.author,
            publishedAt: headline?.publishedAt,
          }}
          className="absolute right-2 top-2"
        />
      </div>
    </div>
  );
}

async function OtherNews() {
  const data = await getAllNews().then((d) => d.slice(7, 18));

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
          <Link target="_blank" href={news.url}>
            <h3 className="mt-2 text-lg font-semibold">{news.title}</h3>
          </Link>
          <p>{news.description}</p>
        </li>
      ))}
    </ul>
  );
}

async function SearchNews({ search }: { search: string }) {
  const data = await getSearchNews(search).then((d) => d.slice(0, 20));

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
          <Link target="_blank" href={news.url}>
            <h3 className="mt-2 text-lg font-semibold">{news.title}</h3>
          </Link>
          <p className="min-w-0">{news.description}</p>
        </li>
      ))}
    </ul>
  );
}
