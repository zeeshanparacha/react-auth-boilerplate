import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Notify from "../../components/Notify";
import Password from "../../components/Password";
import Textbox from "../../components/Textbox";
import { callSignIn } from "../../store/effects.js/users";
import { handleValidations } from "../../utils";

import styles from "./styles.module.css";
import "../../index.css";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.users) || {};

  const [SignInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const _handleChange = (event) => {
    setSignInData({ ...SignInData, [event.target.name]: event.target.value });
  };

  const _handleSubmit = async () => {
    const errors = handleValidations(SignInData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    
    setErrors({});
    dispatch(callSignIn(SignInData,navigate));
  };

  const { email, password } = SignInData;

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>

      <div className={styles.feilds}>
        <Label label={"email"} />
        <Textbox
          name="email"
          onChange={_handleChange}
          value={email}
          error={errors}
        />
      </div>

      <div className={styles.feilds}>
        <Label label={"password"} />
        <Password
          name="password"
          onChange={_handleChange}
          value={password}
          error={errors}
        />
      </div>

      <Notify type="error" message={error} />

      <Button label={"Sign In"} onClick={_handleSubmit} loading={loading} />

      <p className={styles.create_account}>
        Don't have an account?
        <span onClick={() => navigate("/sign-up")}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignIn;
