const { conexion } = require("./config");

const carreramateria = async (objeto) => {
  const consulta = "INSERT INTO carreramateria SET ?";
  const [nuevo] = await conexion.query(consulta, objeto);
  
  return buscar("carreramateria", nuevo.insertId);
};

const buscar = async (tabla, id) => {
  const consulta = `SELECT * FROM ${tabla} WHERE activo = 1 AND idCarreraMateria = ?`;
  const [[objeto]] = await conexion.query(consulta, id);
  return objeto || {};
};

module.exports = {
  carreramateria,
};
