import React, { ReactNode, useEffect } from "react";
import styles from "../watch.module.css";
import classNames from "classnames";
import { sizeSelectType } from "../util/type/sizetype";

interface proptype {
  children: ReactNode;
  style?: React.CSSProperties;
  size?: keyof sizeSelectType;
  
}

const WatchContainer = ({ children, style, size }: proptype) => {
 

  return (
    <div
      style={style}
      className={classNames(
        styles.container,
        size === undefined ? "" : styles[size]
      )}
    >
      {children}
    </div>
  );
};

export default WatchContainer;
