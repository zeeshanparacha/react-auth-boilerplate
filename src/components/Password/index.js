import React, { useState } from "react";
import { ReactComponent as EYE_CLOSED } from "../../assets/svgs/eye-closed.svg";
import { ReactComponent as EYE_OPEN } from "../../assets/svgs/eye-open.svg";
import { ReactComponent as CROSS } from "../../assets/svgs/cross.svg";
import { ReactComponent as CHECK } from "../../assets/svgs/check.svg";
import styles from "./styles.module.css";

const Password = ({ onChange, value, name, enableValidations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [validations, setValidations] = useState({
    length: {
      message: "Must contain 8 characters long.",
      isValid: false,
      pattern: /.{8,}/,
    },
    letter: {
      message: "Must contain at least 1 letter.",
      isValid: false,
      pattern: /[a-zA-Z]/,
    },
    number: {
      message: "Must contain at least 1 number.",
      isValid: false,
      pattern: /[0-9]/,
    },
    specialCharacter: {
      message: "Must contain at least 1 special character.",
      isValid: false,
      pattern: /[^a-zA-Z0-9]/,
    },
  });

  const _handleChange = (event) => {
    const password = event.target.value;
    if (!enableValidations) return onChange(event, null);

    const newValidations = { ...validations };

    let isPasswordValid = true;

    Object.keys(newValidations).forEach((key) => {
      newValidations[key].isValid = newValidations[key].pattern.test(password);
      if (!newValidations[key].pattern.test(password)) {
        isPasswordValid = false;
      }
    });

    setValidations(newValidations);
    onChange(event, isPasswordValid);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type={`${isOpen ? "text" : "password"}`}
          onChange={_handleChange}
          value={value}
          name={name}
          className={styles.password}
          autoComplete="new-password"
        />

        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <EYE_OPEN /> : <EYE_CLOSED />}
        </span>
      </div>

      {enableValidations && (
        <div className={styles.validation_container}>
          {Object.keys(validations).map((element) => {
            return (
              <div className={styles.validations}>
                {validations[element].isValid ? (
                  <CHECK className={styles.check} />
                ) : (
                  <CROSS className={styles.cross} />
                )}
                <p>{validations[element].message}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Password;
