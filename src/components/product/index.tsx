"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { ProductWithBlurredDataUrls } from "@/lib/getbase64";

import styles from "./product.module.scss";

type ProductProps = {
  product: ProductWithBlurredDataUrls;
  badge?: string;
};
const Product: FC<ProductProps> = ({ product, badge }) => {
  return (
    <Link key={product.id} href={`/products/${product.id}`} className={styles.card}>
      <div className={styles.cardFavorite}>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("clicked");
          }}
        >
          <Heart className="h-8 w-8" />
        </button>
      </div>
      <figure style={{ position: "relative" }}>
        <Image
          width="180"
          height={"180"}
          src={product.imageUrl}
          alt={product.title}
          placeholder="blur"
          blurDataURL={product.blurredDataUrl}
          loading="lazy"
          className={styles.cardImage}
        />
      </figure>
      <article className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{product.title}</h4>
        <p className={styles.cardPrice}>${product.price}</p>
        {badge && <span className={styles.cardBadge}>{badge}</span>}
      </article>
    </Link>
  );
};

export default Product;
