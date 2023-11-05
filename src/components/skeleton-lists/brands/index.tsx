import clsx from "clsx";
import React from "react";

import Skeleton from "@/components/skeleton/Skeleton";

import styles from "./skeletonList.module.scss";

const BandSkeletonList = () => {
  return (
    <section className={clsx(styles.skeletonList, "container")}>
      {[...Array(8)].map((_, index) => (
        <Skeleton key={index} className="radius-full" />
      ))}
    </section>
  );
};

export default BandSkeletonList;
