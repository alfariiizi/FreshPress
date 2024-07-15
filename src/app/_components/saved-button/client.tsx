"use client";

import { cn } from "@/lib/utils";
import { type Session } from "next-auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi";
import { type ArticleData } from ".";
import { deleteArticle, saveArticle } from "./actions";

type Props = {
  articleId?: string;
  data: ArticleData;
  initialSaved?: boolean;
  className?: string;
  session: Session | null;
};

export default function SavedButtonClient(props: Props) {
  const router = useRouter();
  const [isSaved, setSaved] = useState(props.initialSaved);

  return (
    <button
      type="button"
      className={cn("z-50", props.className)}
      onClick={async (e) => {
        e.stopPropagation();
        if (!props.session) {
          router.push("/login");
        } else {
          if (isSaved) {
            await deleteArticle({
              title: props.data.title,
              userId: props.session.user.id,
            });
            router.refresh();
          } else {
            await saveArticle({
              data: {
                userId: props.session.user.id,
                title: props.data.title,
                publishedAt: props.data.publishedAt,
                author: props.data.author,
                url: props.data.url,
                content: props.data.content,
                imageUrl: props.data.imageUrl,
                description: props.data.description,
              },
            });
            router.refresh();
          }
        }
        setSaved((prev) => !prev);
      }}
    >
      <HiOutlineBookmark
        className={cn(
          "size-6 hover:fill-zinc-300",
          isSaved
            ? "fill-orange-300 hover:fill-orange-200"
            : "fill-zinc-100 hover:fill-zinc-200",
        )}
      />
    </button>
  );
}
