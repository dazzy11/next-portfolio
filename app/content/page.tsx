import React, { JSX } from "react";
import styles from "./page.module.css";

export const HomePage = (): JSX.Element => {
  return (
    <div className={styles["home-page"]}>
      <div className={styles.container}>
        <div className={styles.overlap}>
          <div className={styles["text-wrapper"]}>
            I&apos;m a full-stack developer
          </div>
          <div className={styles["text-wrapper-2"]}>Deepak</div>
        </div>

        <div className={styles.rectangle} />

        <div className={styles["text-wrapper-3"]}>i</div>

        <div className={styles.component}>
          <div className={styles["overlap-group"]}>
            <div className={styles["text-wrapper-4"]}>Know more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
