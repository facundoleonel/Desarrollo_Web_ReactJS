const { conexion } = require("./config");

/**
 * Crea un nuevo elemento en la base de datos
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - Objeto creado
 */
const crear = async (estudiante) => {
  const consulta = "INSERT INTO estudiante SET ?";
  const [estudianteNuevo] = await conexion.query(consulta, estudiante);

  return buscar(estudianteNuevo.insertId);
};

/**
 * Esta consulta obtiene todos los datos de los estudiantes
 * @param {number} - 1 - activos, 0 - inactivos
 * @returns {object} - array de estudiantes
 */
const obtener = async () => {
  const consulta = "SELECT * FROM estudiante WHERE activo = 1;";
  const [estudiantes] = await conexion.query(consulta);
  return estudiantes;
};

/**
 * Esta consulta busca un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */
const buscar = async (id) => {
  const consulta =
    "SELECT * FROM estudiante WHERE activo = 1 AND idEstudiante = ?";
  const [[estudiantes]] = await conexion.query(consulta, id);
  return estudiantes || {};
};

/**
 * Esta consulta elimina un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */
const eliminar = async (id) => {
  const consulta = `UPDATE estudiante SET activo = 0 WHERE idEstudiante = ${id}`;
  return await conexion.query(consulta);
};

/**
 * Esta consulta actualiza un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */
const actualizar = async (id, nuevosDatos) => {
  const {
    dni,
    nombre,
    apellido,
    fechaNacimiento,
    correoElectronico,
    celular,
    foto,
    nacionalidad,
  } = nuevosDatos;
  const consulta = `
    UPDATE estudiante
    SET dni = ?, nombre = ?, apellido = ?, fechaNacimiento = ?,
      correoElectronico = ?, celular = ?, foto = ?, nacionalidad = ?
    WHERE idEstudiante = ? AND activo = 1
  `;
  const result = await conexion.query(consulta, [
    dni,
    nombre,
    apellido,
    fechaNacimiento,
    correoElectronico,
    celular,
    foto,
    nacionalidad,
    id,
  ]);
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
