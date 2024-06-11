import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callSignOut } from "../../store/effects.js/users";
import logo from "../../assets/images/logo.png";
import { ReactComponent as Logout } from "../../assets/svgs/logout.svg"
import styles from "./styles.module.css";

const Layout = ({ children, isNav }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _handleLogout = () => dispatch(callSignOut(navigate))
    return (
        <div className={styles.layout_container}>
            <section>
                <img src={logo} alt="logo" className={styles.logo} />
                <p className={styles.branding}>We make knowledge sharing easy!</p>
            </section>
            <section>
                {isNav && <nav><p onClick={_handleLogout}><Logout /> Logout</p></nav>}
                {children}
            </section>
        </div>
    )
};
export default Layout;
