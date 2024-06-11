import { loading, signIn, signUp, error, clear } from "../actions/users";
import axios from "axios";

export const callSignIn = (payload, navigate) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      // we can configure axios interceptor to configure baseUrl and other app configurations.
      const response = await axios.post(
        `http://localhost:8000/authentication/sign-in`,
        payload
      );
      localStorage.setItem("token", response.data.token);
      dispatch(signIn(response.data));
      navigate("/dashboard");
    } catch (err) {
      dispatch(error(err?.response?.data?.message ?? "Something went wrong!"));
      setTimeout(() => dispatch(error("")), 3000);
      return;
    }
  };
};

export const callSignUp = (payload, navigate) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      // we can configure axios interceptor to configure baseUrl and other app configurations.
      const response = await axios.post(
        `http://localhost:8000/authentication/sign-up`,
        payload
      );
      localStorage.setItem("token", response.data.token);
      dispatch(signUp(response.data));
      navigate("/dashboard");
    } catch (err) {
      dispatch(error(err?.response?.data?.message ?? "Something went wrong!"));
      setTimeout(() => dispatch(error("")), 3000);
      return;
    }
  };
};

export const callSignOut = (navigate) => {
  return async (dispatch) => {
    dispatch(clear());
    localStorage.clear();
    navigate("/");
  };
};
