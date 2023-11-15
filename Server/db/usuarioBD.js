const { conexion } = require("./config");
/**
 * Busca un elemento por su id
 * @param {Text} id - id del elemento
 * @param {Text} id - id del elemento
 * @returns {object} - datos del elemento
 */
const Login = async (correoElectronico, clave) => {
  const consulta =
    "SELECT * FROM usuario WHERE activo = 1 AND correoElectronico = ? AND clave = ?";
  const [[usuario]] = await conexion.query(consulta, [
    correoElectronico,
    clave,
  ]);
  return usuario || false;
};

module.exports = {
  Login,
};
