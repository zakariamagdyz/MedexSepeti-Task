import clsx from "clsx";
import React from "react";

import Skeleton from "@/components/skeleton/Skeleton";

import styles from "./skeletonList.module.scss";

const ProductSkeletonList = () => {
  return (
    <section className={clsx(styles.skeletonList, "container")}>
      {[...Array(4)].map((_, index) => (
        <Skeleton key={index} />
      ))}
    </section>
  );
};

export default ProductSkeletonList;
