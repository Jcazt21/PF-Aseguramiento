import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./User03C.module.css";

type User03CType = {
  imageDimensions?: string;

  /** Style props */
  user03CIconWidth?: CSSProperties["width"];
  user03CIconHeight?: CSSProperties["height"];
  user03CIconPosition?: CSSProperties["position"];
  user03CIconTop?: CSSProperties["top"];
  user03CIconLeft?: CSSProperties["left"];
  user03CIconBorderRadius?: CSSProperties["borderRadius"];
};

const User03C: FunctionComponent<User03CType> = ({
  imageDimensions,
  user03CIconWidth,
  user03CIconHeight,
  user03CIconPosition,
  user03CIconTop,
  user03CIconLeft,
  user03CIconBorderRadius,
}) => {
  const user03CIconStyle: CSSProperties = useMemo(() => {
    return {
      width: user03CIconWidth,
      height: user03CIconHeight,
      position: user03CIconPosition,
      top: user03CIconTop,
      left: user03CIconLeft,
      borderRadius: user03CIconBorderRadius,
    };
  }, [
    user03CIconWidth,
    user03CIconHeight,
    user03CIconPosition,
    user03CIconTop,
    user03CIconLeft,
    user03CIconBorderRadius,
  ]);

  return (
    <img
      className={styles.user03cIcon}
      alt=""
      src={imageDimensions}
      style={user03CIconStyle}
    />
  );
};

export default User03C;
