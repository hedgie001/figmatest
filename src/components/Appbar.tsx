import { FunctionComponent } from "react";
import styles from "./Appbar.module.css";

export type AppbarType = {
  className?: string;
};

const Appbar: FunctionComponent<AppbarType> = ({ className = "" }) => {
  return (
    <div className={[styles.appbar, className].join(" ")}>
      <img
        className={styles.brandIcon}
        loading="lazy"
        alt=""
        src="/brand@2x.png"
      />
      <div className={styles.herrgttliWrapper}>
        <a className={styles.herrgttli}>Herrgöttli</a>
      </div>
    </div>
  );
};

export default Appbar;
