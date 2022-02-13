export function getToken() {
  return window.localStorage.getItem("chrouvrayToken");
}

export function setToken(token) {
  window.localStorage.setItem("chrouvrayToken", JSON.stringify(token));
}

export function removeToken() {
  window.localStorage.removeItem("chrouvrayToken");
}

export function getUserData() {
  return window.localStorage.getItem("user");
}

export function setUserData(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}

export function removeUserData() {
  window.localStorage.removeItem("user");
}
