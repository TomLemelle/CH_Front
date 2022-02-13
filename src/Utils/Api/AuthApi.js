import axios from "axios";
import jwtDecode from "jwt-decode";
import { setToken, setUserData } from "./LocalStorage";

const config = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const URLApi = "http://127.0.0.1:8000/api/";
export function hasAuthenticated() {
  const token = window.localStorage.getItem("chrouvrayToken");
  const result = token ? tokenIsValid(token) : false;
  if (false === result) {
    window.localStorage.removeItem("chrouvrayToken");
  }
  return result;
}

export function login(credentials) {
  return axios
    .post(URLApi + "authentication_token", credentials)
    .then((response) => response.data)
    .then((res) => {
      console.log(res);
      setToken(res.token);
    });
}

export function createUser(credentials) {
  return axios
    .post(URLApi + "users", credentials, {
      headers: config,
    })
    .then((res) => {
      console.log("Account created !", res.data);
    });
}

export function logout() {
  window.localStorage.removeItem("chrouvrayToken");
}

function tokenIsValid(token) {
  const { exp } = jwtDecode(token);

  if (exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}

export function getJWT() {
  return window.localStorage.getItem("chrouvrayToken");
}

export function decodeJWT(token) {
  return jwtDecode(token);
}

export function getUserInfo(token) {
  return axios
    .get(URLApi + `me`, {
      headers: {
        Accept: "application/json",
        Authorization: "bearer " + token,
      },
    })
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setUserData(data);
    });
}

export function updateUserInfo(id, data, token) {
  return axios
    .patch(URLApi + `users/${id}`, {
      data,
      headers: {
        "Content-Type": "merge-patch+json",
        Accept: "merge-patch+json",
        Authorization: "bearer " + token.split('"').join(""),
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setUserData(data);
    });
}
