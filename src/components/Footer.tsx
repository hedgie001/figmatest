import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <section className={styles.herrgttliGetrnkeAgContainer}>
        <p className={styles.herrgttliGetrnkeAg}>Herrgöttli Getränke AG</p>
        <p className={styles.technoiparkstrasse2}>Technoiparkstrasse 2</p>
        <p className={styles.winterthur}>8600 Winterthur</p>
      </section>
      <a className={styles.facebookInstagramLinkedinContainer}>
        <p className={styles.facebook}>Facebook</p>
        <p className={styles.instagram}>Instagram</p>
        <p className={styles.linkedin}>LinkedIn</p>
      </a>
    </div>
  );
};

export default Footer;
