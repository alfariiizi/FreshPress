import Axios from "axios";
import { env } from "process";

export const newsApi = Axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: env.NEWS_API_KEY,
  },
});

export type ArticleSource = {
  id: string | null;
  name: string;
};

export type Article = {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
