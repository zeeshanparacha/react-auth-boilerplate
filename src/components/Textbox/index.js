import React from "react";
import styles from "./styles.module.css";

const Textbox = ({ onChange, value, name }) => {
  return (
    <input
      type="text"
      autoComplete="new-password"
      onChange={onChange}
      value={value}
      name={name}
      className={styles.input}
    />
  );
};
export default Textbox;
