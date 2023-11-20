const { conexion } = require("./config");
/**
 * Busca un elemento por su id
 * @param {Text} id - id del elemento
 * @param {Text} id - id del elemento
 * @returns {object} - datos del elemento
 */
const buscarCorreo = async (correoElectronico) => {
  const consulta =
    "SELECT * FROM usuario WHERE activo = 1 AND correoElectronico = ?";
  const [[usuario]] = await conexion.query(consulta, [correoElectronico]);
  return usuario || false;
};

module.exports = {
  buscarCorreo,
};
