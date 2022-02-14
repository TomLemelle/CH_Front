import axios from "axios";
import jwtDecode from "jwt-decode";
import { getToken, setToken, setUserData } from "./LocalStorage";

const config = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/merge-patch+json",
  },
};

const configbis = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const   URLApi = "https://127.0.0.1:8000/api/";
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
      console.log('Logged in!', res.token)
      setToken(res.token)
    });
}

export function createUser(credentials) {
  return axios
    .post(URLApi + "users", credentials, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
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
    .get(URLApi + "me", {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
    .then((res) => {
      console.log('user data fetched !', res)
      setUserData(res.data)
    })
}

export function updateUserInfo(id, data, token) {
  var config = {
    method: "patch",
    url: `http://127.0.0.1:8000/api/users/${id}`,
    headers: {
      "Content-Type": "application/merge-patch+json",
      Accept: "application/json",
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDQ3NjI0MzMsImV4cCI6MTY0NDc2NjAzMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiRU5DT1JFREVWQERFVi5DT00ifQ.BpUT7p0_c9QzES8yyT97Q0hfgNxLSPVkBuxlTaI6z1KyKu4Ro42gH-Wfv3ZL2vPAjJ8hhTL3at3yJmVFRjimtAkOd6bIFxFo7MDS-Jy46DGvtQBWNK6I6Df5yakksKudfIdjLZJe_xlASZvzNecdwF4lWNcjxwGH3QkdT3N71MRnKY9_MJwq2yAJGgnVwibEejSPo6AYtT04jFlf4_cfQgAoCBdxRXXdAGPOijB70YU8KL644JlM2iCz3Wx4VDMmrmpkVwKL1-DKbpFTQy7VbEacsj24OR5dYdLG9JXx98hWUbr9P1manU1IfL0BL7EcOHkbuz7lZkl4TcGqfcOaecEswxoqjWLuPgQjo1SKzCAC70YyUjlRrTaZa3jmyhQfxDhYOxmGPYjPP9Tdk1cFt5VuoOfy9NmQhSHuKeSOimjboJ4xqY5yhII12CIMywZASnT_WcCTRkTSOUC5kOd8lSyNtCfqXJShx9Uq3G-HF6QAM0-O95h62Iz7TjCSJQqRd3QU0okbfHzUkVYjMvRDDW_uC02KpesI2ABI8CycsAyOPkkW-I5LBWeFqBh2apZ8DWfqfz8qT2IRCk7YvXjzGyLmOHurRuEwdWnu3KUam5jlt-ZcyB9eSKo7qw-v3T0LtXkuehLxFCGBwBsZfsQNIN05iScuQp-5zLxL_0Bqysg`,
    },
    data: JSON.stringify(data),
  };

  axios(config).then((res) => console.log(JSON.stringify(res.data)));
}
