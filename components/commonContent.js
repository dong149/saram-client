import React from "react";
import styles from "../styles/components/CommonContent.module.scss";
const CommonContent = (props) => {
  const { marginTop } = props;
  return (
    <div
      style={{
        marginTop: marginTop,
      }}
      className={styles.content}
    >
      This is Content!
    </div>
  );
};

export default CommonContent;
