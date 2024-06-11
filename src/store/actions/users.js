import * as constants from "../contants/users";

export const signIn = (data) => ({
  type: constants.SIGN_IN,
  payload: data
})

export const signUp = (data) => ({
  type: constants.SIGN_UP,
  payload: data
})

export const loading = (boolean) => ({
  type: constants.LOADING,
  payload: boolean
})

export const error = (message) => ({
  type: constants.ERROR,
  payload: message
})

export const clear = () => ({
  type: constants.CLEAR,

})