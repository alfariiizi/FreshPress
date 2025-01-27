import { cache } from "@/lib/cache";
import { type Article, newsApi } from "@/server/news-api";

export const getAllNews = cache(async () => {
  const res = await newsApi
    .get<{
      articles: Article[];
    }>("/top-headlines", {
      params: {
        country: "us",
      },
    })
    .then((d) => d.data.articles.filter((f) => !!f.urlToImage && !!f.url));
  return res;
}, ["getAllNews"]);

export const getSearchNews = cache(
  async (search: string) => {
    const res = await newsApi
      .get<{
        articles: Article[];
      }>("/everything", {
        params: {
          q: search,
        },
      })
      .then((d) => d.data.articles.filter((f) => !!f.urlToImage && !!f.url));
    return res;
  },
  ["getSearchNews"],
);
