/*
  Warnings:

  - Added the required column `roomPhoto` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hotels" ADD COLUMN     "roomPhoto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
