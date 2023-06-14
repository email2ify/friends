import React from "react";
import styles from "../styles/Display.module.css";

const Display = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Display}
        src={src}
        height={height}
        width={height}
        alt="Display"
      />
      {text}
    </span>
  );
};

export default Display;