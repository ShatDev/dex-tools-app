import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Header.module.scss";

const Header = ({ page }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>{page}</h3>
    </div>
  );
};

export default Header;
