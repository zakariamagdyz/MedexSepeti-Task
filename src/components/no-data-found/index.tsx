import React from "react";

import styles from "./noDataFound.module.scss";

const NoDataFound = ({ entityName }: { entityName: string }) => {
  return (
    <section className={styles.notFound}>
      <h3>No {entityName} found</h3>
    </section>
  );
};

export default NoDataFound;
