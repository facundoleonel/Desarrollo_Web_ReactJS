const {conexion} = require('./config');

/**
 * Esta consulta carga los datos del estudiante
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */

const crear = async(carrera) => {
    const consulta = 'INSERT INTO carrera SET ?';
    const [carreraNueva] = await conexion.query(consulta,carrera);

    return buscar(carreraNueva.insertId);

}

/**
 * Esta consulta obtiene todos los datos de los estudiantes
 * @param {number} - 1 - activos, 0 - inactivos
 * @returns {object} - array de estudiantes
 */
const obtener = async () => {
    const [carreras] = await conexion.query(`
      SELECT  * FROM carrera WHERE activo = 1;
    `);
    return carreras;
  };
  

/**
 * Esta consulta busca un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */

const buscar = async (id) => {
    const [[carrera]] = await conexion.query(`
        SELECT * FROM carrera WHERE activo = 1 AND idCarrera = ? 
    `,id);
    return carrera || {};
}

/**
 * Esta consulta elimina un estudiante
 * @param {number} id - id del estudiante
 * @returns {object} - datos del estudiante encontrado
 */
const eliminar = async (id) => {
    return await conexion.query(`UPDATE carrera SET activo = 0 WHERE idCarrera = ${id}`);
  };
  
  /**
   * Esta consulta actualiza un estudiante
   * @param {number} id - id del estudiante
   * @returns {object} - datos del estudiante encontrado
   */
  const actualizar = async (id, nuevosDatos) => {
    const {nombre, modadlidad} = nuevosDatos;
  
    const result = await conexion.query(`
        UPDATE carrera
        SET
           nombre = ?, modadlida = ?
        WHERE idCarrera = ? AND activo = 1
      `, [nombre,modadlidad, id]);
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
    actualizar
}