import React, { useState } from "react";
import Textbox from "../../components/Textbox";
import Password from "../../components/Password";

import Label from "../../components/Label";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import "../../index.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const _handleChange = (event) => {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  };

  const _handlePasswordChange = (event,isValid) => {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  }

  const { username, email, password } = signUpData;

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>

      <Label label={"username"} />
      <Textbox name="username" onChange={_handleChange} value={username} />

      <Label label={"email"} />
      <Textbox name="email" onChange={_handleChange} value={email} />

      <Label label={"password"} />
      <Password name="password" onChange={_handlePasswordChange} value={password} enableValidations={true} />

      <Button label={"Sign Up"} />

      <p className={styles.create_account}>
        Already have an account?{" "}
        <span onClick={() => navigate("/")}>Sign In</span>
      </p>
    </div>
  );
};

export default SignUp;
