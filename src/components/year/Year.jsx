import React from "react";

import styles from "./year.module.scss";

const textYear = new Date().getFullYear();

const Year = () => {
  return <span className={styles.textYear}>{textYear}</span>;
};

export default Year;
