import { cache } from "@/lib/cache";
import { type Article, newsApi } from "@/server/news-api";

export const getCategoryNews = cache(
  async (category: string) => {
    const res = await newsApi
      .get<{
        // sources: NewsSource[];
        articles: Article[];
      }>("/top-headlines", {
        params: {
          country: "us",
          category,
        },
      })
      .then((d) => d.data.articles.filter((f) => !!f.urlToImage && !!f.url));
    return res;
  },
  ["getCategoryNews", "category"],
);
