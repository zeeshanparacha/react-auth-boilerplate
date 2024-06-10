import React, { useState } from "react";
import Textbox from "../../components/Textbox";
import Password from "../../components/Password";
import Label from "../../components/Label"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const SignIn = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const _handleChange = (event) => {
    setSignInData({ ...signInData, [event.target.name]: event.target.value })
  };

  const { email, password } = signInData;

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>

      <Label label={"email"} />
      <Textbox name="email" onChange={_handleChange} value={email} />

      <Label label={"password"} />
      <Password name="password" onChange={_handleChange} value={password} />

      <Button label={"Sign In"} />

      <p className={styles.create_account}>Dont have an account? <span onClick={() => navigate("/sign-up")}>Sign Up</span></p>
    </div>
  );
};
export default SignIn;
