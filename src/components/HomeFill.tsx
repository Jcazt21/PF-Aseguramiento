import { FunctionComponent } from "react";
import styles from "./HomeFill.module.css";
const HomeFill: FunctionComponent = () => {
  return (
    <button className={styles.homeFill1}>
      <img className={styles.subtractIcon1} alt="" src="/subtract.png" />
    </button>
  );
};

export default HomeFill;
