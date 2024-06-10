import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./styles.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.layout_container}>
            <section>
                <img src={logo} alt="logo" className={styles.logo} />
                <p className={styles.branding}>We make knowledge sharing easy!</p>
            </section>
            <section>
                {children}
            </section>
        </div>
    )
};
export default Layout;
