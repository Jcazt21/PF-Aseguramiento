import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./UniTechCard.module.css";

type UniTechCardType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const UniTechCard: FunctionComponent<UniTechCardType> = ({
  propTop,
  propLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.groupParent} style={groupDivStyle}>
      <div className={styles.unitechWrapper}>
        <b className={styles.unitech}>UniTech</b>
      </div>
      <img
        className={styles.whatsappImage20230908At2}
        alt=""
        src="/undefined.png"
      />
    </div>
  );
};

export default UniTechCard;
