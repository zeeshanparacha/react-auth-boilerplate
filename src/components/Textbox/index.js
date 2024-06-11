import React from "react";
import styles from "./styles.module.css";

const Textbox = ({ onChange, value, name, error, onFocus}) => {
  return (
    <div className={`${styles.container} ${error[name] && styles.error}`}>
      <input
        type="text"
        autoComplete="new-password"
        onChange={onChange}
        value={value}
        name={name}
        className={styles.input}
        onFocus={onFocus}
      />
      {error[name] && <p>{error[name]}</p>}
    </div>
  );
};
export default Textbox;
