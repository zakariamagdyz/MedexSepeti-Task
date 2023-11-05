import { Brand, Product } from "@prisma/client";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export const addBlurredDataUrls = async (producs: Product[]) => {
  const base64Promises = producs.map((product) => getBase64(product.imageUrl));
  const base64Results = await Promise.all(base64Promises);

  const productsWithBlurredDataUrls = producs.map((product, index) => {
    return {
      ...product,
      blurredDataUrl: base64Results[index],
    };
  });

  return productsWithBlurredDataUrls;
};

export type ProductWithBlurredDataUrls = Awaited<ReturnType<typeof addBlurredDataUrls>>[number];

export const addBlurredBrandsDataUrls = async (brand: Brand[]) => {
  // Make all requests at once instead of awaiting each one -- avoiding the waterfall effect
  const base64Promises = brand.map((brand) => getBase64(brand.imageUrl));
  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const brandsWithBlurredDataUrls = brand.map((product, index) => {
    return {
      ...product,
      blurredDataUrl: base64Results[index],
    };
  });

  return brandsWithBlurredDataUrls;
};

export type BrandWithBlurredDataUrls = Awaited<ReturnType<typeof addBlurredBrandsDataUrls>>[number];
