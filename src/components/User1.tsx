import { FunctionComponent } from "react";
import styles from "./User1.module.css";
const User1: FunctionComponent = () => {
  return (
    <button className={styles.user1}>
      <div className={styles.userChild} />
      <div className={styles.userItem} />
    </button>
  );
};

export default User1;
