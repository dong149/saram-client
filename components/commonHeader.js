import React from "react";
import styles from "../styles/components/CommonHeader.module.scss";
import CommonSearchBox from "./commonSearchBox";
const CommonHeader = () => {
  return (
    <div className={styles.header__wrap}>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <a href="/">
            <div className={styles.logo__wrap}>
              {/* <img
                className={styles.logo}
                src="/donghun.png"
                alt="deathnotegg"
              /> */}
            </div>
          </a>
          <div className={styles.header__navigation__wrap}>
            <div className={styles.header__navigation}>
              <div className={styles.header__navigation__wrap__item}>
                {/* <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  to="/"
                > */}
                검색
                {/* </Link> */}
              </div>

              <div className={styles.header__navigation__wrap__item}>
                {/* <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  to="/deathnote/ranker"
                > */}
                순위표
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header__search__box__wrap}>
          <CommonSearchBox />
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
