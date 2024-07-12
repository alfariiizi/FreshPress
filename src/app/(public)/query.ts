import { cache } from "@/lib/cache";
import { type Article, newsApi } from "@/server/news-api";

// export async function getAllNews() {
//   return res;
// }

export const getAllNews = cache(async () => {
  const res = await newsApi
    .get<{
      articles: Article[];
    }>("/top-headlines", {
      params: {
        // apiKey: process.env.NEWS_API_KEY,
        country: "us",
      },
    })
    .then((d) => d.data.articles.filter((f) => !!f.urlToImage && !!f.url));
  return res;
}, ["getAllNews"]);
