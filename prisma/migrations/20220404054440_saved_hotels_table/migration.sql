-- CreateTable
CREATE TABLE "SaveHotel" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "pricePerNight" TEXT NOT NULL,
    "extras" TEXT,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "roomPhoto" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SaveHotel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SaveHotel_name_key" ON "SaveHotel"("name");

-- AddForeignKey
ALTER TABLE "SaveHotel" ADD CONSTRAINT "SaveHotel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
