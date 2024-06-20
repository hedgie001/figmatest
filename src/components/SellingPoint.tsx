import { FunctionComponent } from "react";
import styles from "./SellingPoint.module.css";

export type SellingPointType = {
  className?: string;
  icon?: string;
};

const SellingPoint: FunctionComponent<SellingPointType> = ({
  className = "",
  icon,
}) => {
  return (
    <div className={[styles.sellingpoint, className].join(" ")}>
      <div className={styles.uSPItem}>
        <img className={styles.icon} loading="lazy" alt="" src={icon} />
      </div>
      <div className={styles.title}>Title</div>
      <div className={styles.morbiFringillaConvallis}>
        Morbi fringilla convallis sapien, id pulvinar odio volutpat.
      </div>
    </div>
  );
};

export default SellingPoint;
