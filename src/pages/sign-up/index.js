import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Notify from "../../components/Notify";
import Password from "../../components/Password";
import Textbox from "../../components/Textbox";
import { callSignUp } from "../../store/effects.js/users";
import { handleValidations } from "../../utils";

import "../../index.css";
import styles from "./styles.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, user: { token, message } } = useSelector((state) => state.users) || {};

  const [SignUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const _handleChange = (event, isValid) => {
    setSignUpData({ ...SignUpData, [event.target.name]: event.target.value });

    if (event.target.name === "password") {
      if (!isValid) {
        setErrors({ ...errors, password: "Invalid password!" });
        return;
      }
      setErrors({ ...errors, password: "" });
    }
  };

  const _handleSubmit = () => {
    const newErrors = handleValidations(SignUpData, errors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    dispatch(callSignUp(SignUpData, navigate));
  };

  const { username, email, password } = SignUpData;

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>

      <Notify
        type={token ? "success" : "error"}
        message={token ? message : error}
      />

      <div className={styles.feilds}>
        <Label label={"username"} />
        <Textbox
          name="username"
          onChange={_handleChange}
          value={username}
          error={errors}
        />
      </div>

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
          enableValidations={true}
          error={errors}
        />
      </div>

      <Button label={"Sign Up"} onClick={_handleSubmit} loading={loading} disabled={token} />

      <p className={styles.create_account}>
        Already have an account?
        <span onClick={() => navigate("/")}>Sign In</span>
      </p>
    </div>
  );
};

export default SignUp;
