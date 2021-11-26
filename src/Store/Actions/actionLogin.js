import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase_config";

export function registerUser(value) {
  return async function (dispatch) {
    const { email, password } = value;
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("USUARIO CREADO CON EXITO");
          localStorage.setItem("token", user);
          return dispatch({
            type: "USER_REGISTER",
          });
        }
      );
    } catch (error) {
      const errorCode = error.code;
      return dispatch({
        type: "ERROR",
        payload: [errorCode],
      });
    }
  };
}
export function startSesion(value) {
  return async function (dispatch) {
    const { email, password } = value;
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("token", user);
          return dispatch({
            type: "USER_VALIDATE",
          });
        })
    } catch (error) {
      const errorCode = error.code;
      setTimeout(() => {
        dispatch({
          type: "CLOSE_SESION",
        });
      }, 3000);
      return dispatch({
        type: "ERROR",
        payload: [errorCode],
      });
    }
  };
}

export function statusUser() {
  return function (dispatch) {
    if (localStorage.getItem("token")) {
      dispatch({
        type: "USER_VALIDATE",
      });
    } else {
      dispatch({
        type: "CLOSE_SESION",
      });
    }
  };
}

export const closeSesion = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: "CLOSE_SESION",
  });
};

export const resetErrors = () => (dispatch) => {
    dispatch({
      type: "RESET_ERRORS",
    });
  };