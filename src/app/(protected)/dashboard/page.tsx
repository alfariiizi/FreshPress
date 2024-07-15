import React from "react";
import { getSavedArticle } from "./query";
import Link from "next/link";
import Image from "next/image";
import SavedButton from "@/app/_components/saved-button";

export default async function page() {
  const articles = await getSavedArticle();

  return (
    <div>
      <h2 className="font-display mb-5 text-3xl font-medium">Saved News</h2>
      <ul className="grid grid-cols-1 gap-4 py-4 md:grid-cols-5">
        {articles?.map((article) => (
          <li key={article.id}>
            <div>
              <div className="relative aspect-video w-full bg-cover bg-clip-content">
                <Image
                  src={article.imageUrl ?? ""}
                  alt={article.title}
                  width={800}
                  height={400}
                  className="h-full w-full rounded-[5px] bg-cover object-cover"
                />

                <SavedButton
                  data={{
                    title: article.title,
                    // @ts-ignore
                    description: article.description,
                    // @ts-ignore
                    imageUrl: article.imageUrl,
                    // @ts-ignore
                    content: article?.content,
                    // @ts-ignore
                    url: article?.url,
                    // @ts-ignore
                    author: article?.author,
                    // @ts-ignore
                    publishedAt: article?.publishedAt,
                  }}
                  className="absolute right-2 top-2"
                />
              </div>
            </div>
            <Link target="_blank" href={article?.url ?? ""}>
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
            </Link>
            {/* <p>{news.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
