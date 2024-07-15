-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "url" TEXT,
    "imageUrl" TEXT,
    "author" TEXT,
    "publishedAt" DATETIME
);
INSERT INTO "new_Article" ("author", "content", "id", "imageUrl", "publishedAt", "title", "url") SELECT "author", "content", "id", "imageUrl", "publishedAt", "title", "url" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
