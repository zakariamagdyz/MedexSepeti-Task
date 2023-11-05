import clsx from "clsx";
import React from "react";

import styles from "./skeleton.module.scss";

const Skeleton = ({ className }: { className?: string }) => {
  return <div className={clsx(styles.skeleton, "animate-pulse", className)}></div>;
};

export default Skeleton;
