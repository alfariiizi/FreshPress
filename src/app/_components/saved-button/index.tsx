import React from "react";
import SavedButtonClient from "./client";
import { getServerAuthSession } from "@/server/auth";
import { getSavedArticle } from "@/app/(protected)/dashboard/query";

export type ArticleData = {
  title: string;
  description?: string;
  content?: string;
  url?: string;
  imageUrl?: string;
  author?: string;
  publishedAt?: string;
};

type Props = {
  data: ArticleData;
  className?: string;
};

export default async function SavedButton({ data, className }: Props) {
  const session = await getServerAuthSession();
  const articles = await getSavedArticle();
  const isSaved = articles?.find((f) => f.title === data.title);

  return (
    <SavedButtonClient
      data={data}
      className={className}
      initialSaved={!!isSaved}
      session={session}
    />
  );
}
