/*
  Warnings:

  - The primary key for the `FavoriteAsteroid` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FavoriteAsteroid" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_FavoriteAsteroid" ("id", "name", "url") SELECT "id", "name", "url" FROM "FavoriteAsteroid";
DROP TABLE "FavoriteAsteroid";
ALTER TABLE "new_FavoriteAsteroid" RENAME TO "FavoriteAsteroid";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
