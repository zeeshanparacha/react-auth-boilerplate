import React from "react";
import { ReactComponent as LOADING } from "../../assets/svgs/loading.svg";

import styles from "./styles.module.css";

const Button = ({ label, onClick, loading, disabled }) => {
  return <button disabled={disabled ?? loading} className={styles.button} onClick={onClick}>{loading ? <LOADING /> : label}</button>
};
export default Button;
