import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createDummyData() {
  // Create 15 dummy brands
  for (let i = 1; i <= 15; i++) {
    await prisma.brand.create({
      data: {
        title: faker.lorem.words({ min: 1, max: 2 }),
        imageUrl: faker.image.urlLoremFlickr({ category: "brand", width: 180, height: 180 }),
      },
    });
  }
  console.log("Dummy brands created");

  // Create 9 dummy products
  for (let i = 1; i <= 200; i++) {
    await prisma.product.create({
      data: {
        title: faker.lorem.words({ min: 1, max: 3 }),
        description: faker.lorem.paragraph(2),
        price: faker.number.int({ min: 300, max: 5_000 }),
        imageUrl: faker.image.urlLoremFlickr({ category: "medical", width: 180, height: 180 }),
        tag: faker.helpers.arrayElement(["BEST_SELLING", "NORMAL", "MOST_VIEWED"]),
        createdAt: faker.date.between({ from: "2020-01-01", to: Date.now() }),
        views: faker.number.int({ min: 10, max: 10_000 }), // 57
      },
    });
  }

  console.log("Dummy products created");
}

createDummyData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
