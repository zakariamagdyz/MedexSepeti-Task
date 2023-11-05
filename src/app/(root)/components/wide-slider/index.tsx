"use client";
import "./carousel.scss";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider, { Settings } from "react-slick";

import useMediaQuery from "@/hooks/useMediaQuery";

import styles from "./wideSlider.module.scss";

const WideSlider = () => {
  const isSmallScreen = useMediaQuery("( max-width: 768px )");

  const currentScreenSettings = isSmallScreen ? smallScreenSettings : bigScreensettings;

  return (
    <section className={clsx(styles.section, "container", "wideSlider")}>
      <Slider {...currentScreenSettings}>
        {IMAGES_LIST.map((img, i) => (
          <div key={i} className={styles.wrapper}>
            <Link href={`/products/${i + 1}`}>
              <Image
                src={img}
                alt="preview"
                width={1168}
                height={500}
                className={styles.sliderImage}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default WideSlider;

const IMAGES_LIST = [
  "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/GXHn2SIoiT8ktLlvdanUXkHPDmG28e5Dgmca8f7s.webp",
  "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/zwURhu4bBvEzilHrrzwSRqW2Dh95vKTPg8009VJH.jpg",
  "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/ilnBMq1dh7gOTK5UqpSwX6vU45Xx91AQWOV0Dyns.webp",
  "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/pXz9vjpzL4nXzOmwOlZIv6XBGeLg3Ip35axr7ulL.webp",
  "https://admin.medexsepeti.com/graph/uploads/original/content_images/medex-slider/aD2Zna7xW8NJJ6Zmj84jaYooae0RZQlKSosnKU9S.webp",
];

const sharedSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const bigScreensettings: Settings = {
  customPaging: function (i) {
    return (
      <Image
        src={`/images/main-slider/slider-preview-${i}.webp`}
        alt={`Preview ${i}`}
        width={600}
        height={600}
        className={styles.previewImage}
      />
    );
  },
  dotsClass: "slick-dots slick-thumb",
  ...sharedSettings,
};
const smallScreenSettings: Settings = {
  ...sharedSettings,
};
