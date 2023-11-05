"use client";
import "./brands.scss";

import { FC } from "react";
import Slider, { Settings } from "react-slick";

import BrandItem from "@/components/brand";
import { BrandWithBlurredDataUrls } from "@/lib/getbase64";

type BrandsSectionProps = {
  brands: BrandWithBlurredDataUrls[];
};
const BrandsSection: FC<BrandsSectionProps> = ({ brands }) => {
  return (
    <section className="brands-section">
      <div className="container">
        <h2>Brands</h2>
        <Slider {...settings}>
          {brands.map((brand) => (
            <BrandItem key={brand.id} brand={brand} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandsSection;

const settings: Settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "40px",
  dots: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 8,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 988,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
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
