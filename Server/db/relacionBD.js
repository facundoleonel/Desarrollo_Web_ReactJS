const { conexion } = require("./config");

const crearCM = async (objeto) => {
  const consulta = "INSERT INTO carreramateria SET ?";
  const [nuevo] = await conexion.query(consulta, objeto);

  return buscar("carreramateria", 'idCarreraMateria', nuevo.insertId);
};

const crearEC = async (objeto) => {
  const consulta = "INSERT INTO estudiantecarrera SET ?";
  const [nuevo] = await conexion.query(consulta, objeto);

  return buscar("estudiantecarrera", 'idEstudianteCarrera', nuevo.insertId);
};

const buscar = async (tabla, idSearch, id) => {
  const consulta = `SELECT * FROM ${tabla} WHERE activo = 1 AND ${idSearch} = ?`;
  const [[objeto]] = await conexion.query(consulta, id);
  return objeto || {};
};
const buscarEC = async (id) => {
  const consulta = `SELECT * FROM estudiantecarrera WHERE estudiante = ?`;
  const [[objeto]] = await conexion.query(consulta, id);
  return objeto || {};
};
const buscarCM = async (id) => {
  const consulta = `SELECT * FROM carreramateria WHERE idCarrera = ?`;
  const [[objeto]] = await conexion.query(consulta, id);
  return objeto || {};
};

module.exports = {
  crearCM,
  crearEC,
  buscarEC,
  buscarCM,
};
