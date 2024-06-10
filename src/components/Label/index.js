import React from "react";
import styles from "./styles.module.css";

const Label = ({ label }) => {
  return <span className={styles.label}>{label}</span>;
};
export default Label;
