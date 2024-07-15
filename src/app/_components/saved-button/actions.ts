"use server";

import { db } from "@/server/db";
import { type ArticleData } from ".";

type Input = ArticleData & {
  userId: string;
};

export async function saveArticle({ data }: { data: Input }) {
  // Check if the article already exists
  let article = await db.article.findFirst({
    where: { title: data.title },
  });

  // If the article does not exist, create it
  if (!article) {
    article = await db.article.create({
      data: {
        title: data.title,
        content: data.content ?? "",
        url: data.url ?? "",
        author: data.author,
        imageUrl: data.imageUrl,
        description: data.description,
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : new Date(),
      },
    });
  }

  // Save the article for the user
  await db.savedArticle.create({
    data: {
      user: { connect: { id: data.userId } },
      article: { connect: { id: article.id } },
    },
  });
}

type DeleteArticle = {
  userId: string;
  title: string;
};

export async function deleteArticle({ userId, title }: DeleteArticle) {
  // Check if the saved article exists
  const savedArticle = await db.savedArticle.findFirst({
    where: {
      userId,
      article: { title },
    },
  });

  if (!savedArticle) {
    return "Article not found";
  }

  // Delete the saved article
  await db.savedArticle.delete({
    where: {
      userId_articleId: {
        userId,
        articleId: savedArticle.articleId,
      },
    },
  });
}
