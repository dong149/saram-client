import React from "react";
import styles from "../styles/components/CommonFooter.module.scss";

const CommonFooter = () => {
  return (
    <footer className={styles.footer__wrap}>
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <span className={styles.footer__title__top}>Privacy Policy</span>
          <span className={styles.footer__description__top}>
            © 2021 Deathnote.GG isn’t endorsed by Riot Games and doesn’t reflect
            the views or opinions of Riot Games or anyone officially involved in
            producing or managing League of Legends. League of Legends and Riot
            Games are trademarks or registered trademarks of Riot Games, Inc.
            League of Legends © Riot Games, Inc.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default CommonFooter;
