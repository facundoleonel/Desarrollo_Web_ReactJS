const { conexion } = require("./config");

/**
 * Esta consulta carga los datos del estudiante
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
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
  const [estudiantes] = await conexion.query(`
    SELECT  
      *,
        (CASE
              WHEN nacionalidad = 0 THEN 'arg'
              WHEN nacionalidad = 1 THEN 'uru'
              WHEN nacionalidad = 2 THEN 'chi'
              WHEN nacionalidad = 3 THEN 'par'
              WHEN nacionalidad = 4 THEN 'bra'
              WHEN nacionalidad = 5 THEN 'bol'
              ELSE ''
          END) AS nacionalidad
    FROM estudiante WHERE activo = 1;
  `);
  return estudiantes;
};

/**
 * Esta consulta busca un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */
const buscar = async (id) => {
  const [[estudiantes]] = await conexion.query(`
    SELECT  
      *,
        (CASE
            WHEN nacionalidad = 0 THEN 'arg'
            WHEN nacionalidad = 1 THEN 'uru'
            WHEN nacionalidad = 2 THEN 'chi'
            WHEN nacionalidad = 3 THEN 'par'
            WHEN nacionalidad = 4 THEN 'bra'
            WHEN nacionalidad = 5 THEN 'bol'
            ELSE ''
        END) AS nacionalidad
    FROM estudiante
    WHERE activo = 1 AND idEstudiante = ?`, id);
  return estudiantes || {};
};

/**
 * Esta consulta elimina un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */
const eliminar = async (id) => {
  return await conexion.query(`UPDATE estudiante SET activo = 0 WHERE idEstudiante = ${id}`);
};

/**
 * Esta consulta actualiza un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */
const actualizar = async (id, nuevosDatos) => {
  const { dni, nombre, apellido, fechaNacimiento,
    correoElectronico, celular, foto,nacionalidad } = nuevosDatos;

  const result = await conexion.query(`
      UPDATE estudiante
      SET
        dni = ?, nombre = ?, apellido = ?, fechaNacimiento = ?,
        correoElectronico = ?, celular = ?, foto = ?,
        nacionalidad =
          CASE ? 
            WHEN 'arg' THEN 0
            WHEN 'uru' THEN 1
            WHEN 'chi' THEN 2
            WHEN 'par' THEN 3
            WHEN 'bra' THEN 4
            WHEN 'bol' THEN 5
            ELSE -1  -- Valor por defecto si no se proporciona una nacionalidad válida
          END
      WHERE idEstudiante = ? AND activo = 1
    `, [dni, nombre, apellido, fechaNacimiento, correoElectronico,
    celular, foto, nacionalidad, id]);
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
