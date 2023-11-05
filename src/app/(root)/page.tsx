import { Suspense } from "react";

import Await from "@/components/await";
import addBlurredDataUrls from "@/lib/getbase64";
import prismadb from "@/lib/prismaDb";

import BestSellingProducts from "./components/best-selling-products";
import Header from "./components/header";
import ProductSkeletonList from "./components/product-skeleton-list";
import WideSlider from "./components/wide-slider";

export const dynamic = "dynamic";
const Home = async () => {
  const BestSellingProductsPromise = prismadb.product.findMany({
    where: {
      tag: "BEST_SELLING",
    },
    take: 10,
  });
  // const brandsPromise = prismadb.brand.findMany({
  //   take: 15,
  // });
  // const MostViewedProductsPromise = prismadb.product.findMany({
  //   where: {
  //     tag: "MOST_VIEWED",
  //   },
  //   take: 15,
  // });

  // const JustArrivedProductsPromise = prismadb.product.findMany({
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  //   take: 15,
  // });
  return (
    <main>
      <Header />
      <section className="mt-4">
        <WideSlider />
      </section>

      <Suspense fallback={<ProductSkeletonList />}>
        <Await promise={BestSellingProductsPromise}>
          {(bestSellingProducts) => (
            <Await promise={addBlurredDataUrls(bestSellingProducts)}>
              {(productItemsWithImagesPlaceholders) => (
                <BestSellingProducts products={productItemsWithImagesPlaceholders} />
              )}
            </Await>
          )}
        </Await>
      </Suspense>
    </main>
  );
};

export default Home;

/* 

*/
