import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { createSafeActionClient } from "next-safe-action/typeschema";

export const actionClient = createSafeActionClient().use(({ next }) => {
  return next({
    ctx: {
      db,
    },
  });
});

export const protectedActionClient = actionClient.use(async ({ ctx, next }) => {
  const session = await getServerAuthSession();
  if (!session) {
    throw new Error("Session is not valid!");
  }

  return next({
    ctx: {
      session,
      ...ctx,
    },
  });
});
