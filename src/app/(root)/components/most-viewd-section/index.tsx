"use client";
import "./carousel.scss";

import React, { FC } from "react";
import Slider, { Settings } from "react-slick";

import NoDataFound from "@/components/no-data-found";
import Product from "@/components/product";
import { ProductWithBlurredDataUrls } from "@/lib/getbase64";

type MostViewedProductsProps = {
  products: ProductWithBlurredDataUrls[];
};
const MostViewedProducts: FC<MostViewedProductsProps> = ({ products }) => {
  if (!products.length) return <NoDataFound entityName="Product" />;

  return (
    <section className="container mostViewed-section">
      <h2>The Most Viewed Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
};

export default MostViewedProducts;

const settings: Settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "45px",
  slidesToShow: 3,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
