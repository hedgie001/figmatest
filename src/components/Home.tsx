import { FunctionComponent } from "react";
import SellingPoint from "./SellingPoint";
import styles from "./Home.module.css";

export type HomeType = {
  className?: string;
};

const Home: FunctionComponent<HomeType> = ({ className = "" }) => {
  return (
    <div className={[styles.home, className].join(" ")}>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.inputSearchParent}>
            <div className={styles.inputSearch}>
              <img
                className={styles.iconSearch}
                alt=""
                src="/icon--search.svg"
              />
              <div className={styles.searchInput}>
                <div className={styles.searchInputBackground} />
                <input
                  className={styles.suche}
                  placeholder="Suche"
                  type="text"
                />
              </div>
            </div>
            <button className={styles.button}>
              <a className={styles.suche1}>Suche</a>
            </button>
          </div>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.content1}>
            <div className={styles.claim}>
              <h1 className={styles.dsBestBier}>
                Ds bestä Bier wos je hets gits!
              </h1>
            </div>
            <div className={styles.text}>
              <div className={styles.ambitioniDedisseScripsisse}>
                Ambitioni dedisse scripsisse iudicaretur. Curabitur blandit
                tempus ardua ridiculus sed magna.
              </div>
            </div>
            <div className={styles.sellingpoints}>
              <SellingPoint icon="/icon.svg" />
              <SellingPoint icon="/icon-1.svg" />
              <SellingPoint icon="/icon-2.svg" />
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.herrgttliGetrnkeAgContainer}>
          <p className={styles.herrgttliGetrnkeAg}>Herrgöttli Getränke AG</p>
          <p className={styles.technoiparkstrasse2}>Technoiparkstrasse 2</p>
          <p className={styles.winterthur}>8600 Winterthur</p>
        </div>
        <div className={styles.facebookInstagramLinkedinContainer}>
          <p className={styles.facebook}>Facebook</p>
          <p className={styles.instagram}>Instagram</p>
          <p className={styles.linkedin}>LinkedIn</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
