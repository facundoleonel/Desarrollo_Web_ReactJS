const LOCALDB = "LOCAL_USER";

export const loadLocalUser = () => {
  return JSON.parse(window.localStorage.getItem(LOCALDB)) || false;
};
export const setLocalUser = (user = {}) => {
  window.localStorage.setItem(LOCALDB, JSON.stringify(user));
};
export const removeLocalUser = () => {
  window.localStorage.removeItem(LOCALDB);
};
