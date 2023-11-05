"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { ProductWithBlurredDataUrls } from "@/lib/getbase64";

import styles from "./product.module.scss";

type ProductProps = {
  product: ProductWithBlurredDataUrls;
};
const Product: FC<ProductProps> = ({ product }) => {
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
        <span className={styles.cardBadge}>PRO</span>
      </article>
    </Link>
  );
};

export default Product;
