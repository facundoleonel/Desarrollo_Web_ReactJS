const bcrypt = require("bcrypt");

const encriptarContrasena = (password) => {
  return bcrypt.hashSync(password, 5);
};

const esContrasenaCorrecta = (password, passwordCrypt) =>
  bcrypt.compareSync(password, passwordCrypt);

module.exports = {
  esContrasenaCorrecta,
  encriptarContrasena,
};
