import { cn } from "@/lib/utils";
import { getAllNews } from "../query";
import Link from "next/link";

export default async function LatestNews({
  className,
}: {
  className?: string;
}) {
  const data = await getAllNews().then((d) => d.slice(1, 6));

  return (
    <div className={cn(className)}>
      <div className="border-b-primary mb-4 border-b-2 text-xl font-semibold">
        <h2 className="bg-primary text-background w-fit px-2 py-1">
          Latest News
        </h2>
      </div>
      <ul className="flex flex-col gap-4">
        {data.map((news, idx) => (
          <li key={`latest-news-${idx + 1}`}>
            <Link target="_blank" href={news.url}>
              <h3 className="font-semibold">{news.title}</h3>
            </Link>
            <p className="text-sm">{news.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
