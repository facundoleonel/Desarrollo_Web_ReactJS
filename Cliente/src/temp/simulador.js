export const getAxiosUsuario = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ ...user, tipoUsuario: 0 });
    }, 3000);
  });
};

const USERDB = "LOCAL_USER"

export const loadLocalUser = () => {
  return JSON.parse(window.localStorage.getItem(USERDB)) || false;
}
export const setLocalUser = (user = {}) => {
  window.localStorage.setItem(USERDB, JSON.stringify(user));
}
export const removeLocalUser = () => {
  window.localStorage.removeItem(USERDB);
}