const { conexion } = require("./config");

/**
 * Crea un nuevo elemento en la base de datos
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - Objeto creado
 */
const crear = async (carrera) => {
  const consulta = "INSERT INTO carrera SET ?";
  const [carreraNueva] = await conexion.query(consulta, carrera);

  return buscar(carreraNueva.insertId);
};

/**
 * Esta consulta obtiene todos los datos de las carrera
 * @param {number} - 1 - activos, 0 - inactivos
 * @returns {object} - array de la carrera
 */
const obtener = async () => {
  const consulta = "SELECT  * FROM carrera WHERE activo = 1;";
  const [carreras] = await conexion.query(consulta);
  return carreras;
};

/**
 * Esta consulta busca una carrera
 * @param {number} id - id de carrera
 * @returns {object} - datos de la carrera encontrado
 */

const buscar = async (id) => {
  const consulta = "SELECT * FROM carrera WHERE activo = 1 AND idCarrera = ?";
  const [[carrera]] = await conexion.query(consulta, id);
  return carrera || {};
};

/**
 * Esta consulta elimina una carrera
 * @param {number} id - id de la carrera
 * @returns {object} - datos de la carrera encontrado
 */
const eliminar = async (id) => {
  const consulta = `UPDATE carrera SET activo = 0 WHERE idCarrera = ${id}`;
  return await conexion.query(consulta);
};

/**
 * Esta consulta actualiza la carrera
 * @param {number} id - id de la carrera
 * @returns {object} - datos de la carrera encontrado
 */
const actualizar = async (id, nuevosDatos) => {
  const { nombre, modalidad } = nuevosDatos;
  const consulta = 'UPDATE carrera SET nombre = ?, modalidad = ? WHERE idCarrera = ? AND activo = 1';
  const result = await conexion.query(consulta, [nombre, modalidad, id]);
  return result.affectedRows > 0;
  //result.affectedRows: verifica si se actualizó al menos una fila en la base de datos.
  //Devolverá true si la actualización fue exitosa y false si no se encontró ningún estudiante
  //con el ID proporcionado o si no se realizó ninguna actualización.
};

module.exports = {
  crear,
  obtener,
  buscar,
  eliminar,
  actualizar,
};
