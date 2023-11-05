import React from "react";

import styles from "./error.module.scss";

const ErrorFallback = () => {
  return (
    <article className={styles.errorContainer}>
      <h3>Something went wrong, while fetching data, Please refresh the page</h3>
    </article>
  );
};

export default ErrorFallback;
