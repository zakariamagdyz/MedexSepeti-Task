"use client";
import "./carousel.scss";

import React, { FC } from "react";
import Slider, { Settings } from "react-slick";

import Product from "@/components/product";
import { ProductWithBlurredDataUrls } from "@/lib/getbase64";

type BestSellingProductsProps = {
  products: ProductWithBlurredDataUrls[];
};
const BestSellingProducts: FC<BestSellingProductsProps> = ({ products }) => {
  return (
    <section className="container bestSelling-slider">
      <h2>Best Selling</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <Product key={product.id} product={product} badge="BEST SELLING" />
        ))}
      </Slider>
    </section>
  );
};

export default BestSellingProducts;

const settings: Settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "40px",
  dots: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 988,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
