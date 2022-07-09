import CommonHeader from "../components/commonHeader";
import Test from "../components/test";
import styles from "../styles/About.module.scss";

export default (props) => {
  return (
    <div>
      <CommonHeader />
      <Test />
      <div className={styles.container}>
        <div className={styles.profile__wrap}>
          <img className={styles.profile__img} src="/donghun.png" />
        </div>
        <div className={styles.name}>
          <span className={styles.name__ko}>류동훈</span>
          <span className={styles.name__en}> | </span>
          <span className={styles.name__en}>Patrick.</span>
        </div>
        <div className={styles.description}>
          서비스 개발을 좋아하는 평범한 개발자입니다.
        </div>
      </div>
    </div>
  );
};
