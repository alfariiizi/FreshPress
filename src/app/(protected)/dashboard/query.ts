import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

export async function getSavedArticle() {
  const session = await getServerAuthSession();
  const user = await db.user.findUnique({
    where: { id: session?.user.id },
    select: {
      savedArticles: {
        include: {
          article: true,
        },
      },
    },
  });
  return user?.savedArticles.map((item) => item.article);
}
