export const getAxiosUsuario = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({...user, tipoUsuario: 0});
    }, 3000);
  });
};
