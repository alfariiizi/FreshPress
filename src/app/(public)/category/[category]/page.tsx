import { MaxWidthDiv } from "@/components/max-width-div";
import { capitalizeAll, cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { getCategoryNews } from "./query";
import LatestNews from "../../_components/LatestNews";
import Image from "next/image";

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

async function OtherNews({ category }: { category: string }) {
  const data = await getCategoryNews(category);

  return (
    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3">
      {data.map((news, idx) => (
        <li key={`news-${idx + 1}`} className="">
          <Link href={news.url} target="_blank">
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
          <Link href={news.url} target="_blank">
            <h3 className="mt-2 text-lg font-semibold">{news.title}</h3>
          </Link>
          <p>{news.description}</p>
        </li>
      ))}
    </ul>
  );
}
