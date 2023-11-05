import Await from "@/components/await";
import PromiseRenderer from "@/components/promise-renderer";
import { addBlurredBrandsDataUrls, addBlurredDataUrls } from "@/lib/getbase64";
import prismadb from "@/lib/prismaDb";

import BandSkeletonList from "../../components/skeleton-lists/brands";
import ProductSkeletonList from "../../components/skeleton-lists/product";
import BestSellingProducts from "./components/best-selling-section";
import BrandsSection from "./components/brands-section";
import Header from "./components/header";
import JustArrivedProducts from "./components/just-arrived-section";
import MostViewedProducts from "./components/most-viewd-section";
import WideSlider from "./components/wide-slider";

export const dynamic = "dynamic";
const Home = async () => {
  const BestSellingProductsPromise = prismadb.product.findMany({
    where: {
      tag: "BEST_SELLING",
    },
    take: 10,
  });
  const brandsPromise = prismadb.brand.findMany({
    take: 16,
  });
  const mostViewedProductsPromise = prismadb.product.findMany({
    where: {
      tag: "MOST_VIEWED",
    },
    take: 16,
  });

  const justArrivedProductsPromise = prismadb.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 16,
  });
  return (
    <main>
      <Header />
      <section className="mt-4 ">
        <WideSlider />
      </section>
      <div className="mt-45">
        <PromiseRenderer promise={BestSellingProductsPromise} skeleton={ProductSkeletonList}>
          {(bestSellingProducts) => (
            <Await promise={addBlurredDataUrls(bestSellingProducts)}>
              {(productWithImagePlaceholder) => (
                <BestSellingProducts products={productWithImagePlaceholder} />
              )}
            </Await>
          )}
        </PromiseRenderer>
      </div>
      <div className="mt-40">
        <PromiseRenderer promise={brandsPromise} skeleton={BandSkeletonList}>
          {(brands) => (
            <Await promise={addBlurredBrandsDataUrls(brands)}>
              {(brandsWithImagePlaceholder) => (
                <BrandsSection brands={brandsWithImagePlaceholder} />
              )}
            </Await>
          )}
        </PromiseRenderer>
      </div>
      <div className="mt-25">
        <PromiseRenderer promise={mostViewedProductsPromise} skeleton={ProductSkeletonList}>
          {(mostViewedProducts) => (
            <Await promise={addBlurredDataUrls(mostViewedProducts)}>
              {(productWithImagePlaceholder) => (
                <MostViewedProducts products={productWithImagePlaceholder} />
              )}
            </Await>
          )}
        </PromiseRenderer>
      </div>
      <div className="mt-25">
        <PromiseRenderer promise={justArrivedProductsPromise} skeleton={ProductSkeletonList}>
          {(justArrivedPropducts) => (
            <Await promise={addBlurredDataUrls(justArrivedPropducts)}>
              {(productWithImagePlaceholder) => (
                <JustArrivedProducts products={productWithImagePlaceholder} />
              )}
            </Await>
          )}
        </PromiseRenderer>
      </div>
    </main>
  );
};

export default Home;
