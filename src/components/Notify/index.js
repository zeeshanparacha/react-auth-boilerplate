import React from "react";
import { ReactComponent as SUCCESS } from "../../assets/svgs/success.svg";
import { ReactComponent as ERROR } from "../../assets/svgs/error.svg";
import styles from "./styles.module.css";

const Notify = ({ message, type }) => {
  if (!message) return <></>;
  return (
    <div className={`${styles.container} ${type === "success" ? styles.success : styles.error}`}>
      <span>{type === "success" ? <SUCCESS /> : <ERROR />}</span>
      <p>{message}</p>
    </div>
  );
};
export default Notify;
