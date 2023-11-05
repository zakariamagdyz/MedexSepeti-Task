import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { BrandWithBlurredDataUrls } from "@/lib/getbase64";

import styles from "./brand.module.scss";

type BrandItemProps = {
  brand: BrandWithBlurredDataUrls;
};
const BrandItem: FC<BrandItemProps> = ({ brand }) => {
  return (
    <Link key={brand.id} href={`/brands/${brand.id}`} className={styles.card}>
      <figure style={{ position: "relative" }}>
        <Image
          width="120"
          height={"120"}
          src={brand.imageUrl}
          alt={brand.title}
          placeholder="blur"
          blurDataURL={brand.blurredDataUrl}
          loading="lazy"
          className={styles.cardImage}
        />
      </figure>
      <h2>{brand.title}</h2>
    </Link>
  );
};

export default BrandItem;
