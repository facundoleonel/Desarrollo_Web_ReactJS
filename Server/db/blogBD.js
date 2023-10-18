const { conexion } = require("./config");

/**
 * Esta consulta carga los datos de la blog
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */

const crear = async (blog) => {
  const consulta = "INSERT INTO blog SET ?";
  const [blogNueva] = await conexion.query(consulta, blog);

  return buscar(blogNueva.insertId);
};

/**
 * Esta consulta obtiene todos los datos de las blog
 * @param {number} - 1 - activos, 0 - inactivos
 * @returns {object} - array de la blog
 */
const obtener = async () => {
  const [blog] = await conexion.query(`SELECT  * FROM blog WHERE activo = 1;`);
  return blog;
};

/**
 * Esta consulta busca una blog
 * @param {number} id - id de blog
 * @returns {object} - datos de la blog encontrado
 */

const buscar = async (id) => {
  const [[blog]] = await conexion.query(
    `SELECT * FROM blog WHERE activo = 1 AND idBlog = ?`,
    id
  );
  return blog || {};
};

/**
 * Esta consulta elimina una blog
 * @param {number} id - id de la blog
 * @returns {object} - datos de la blog encontrado
 */
const eliminar = async (id) => {
  return await conexion.query(
    `UPDATE blog SET activo = 0 WHERE idBlog = ${id}`
  );
};

/**
 * Esta consulta actualiza la blog
 * @param {number} id - id de la blog
 * @returns {object} - datos de la blog encontrado
 */
const actualizar = async (id, nuevosDatos) => {
  const { titulo, contenido } = nuevosDatos;

  const result = await conexion.query(
    `UPDATE blog SET titulo = ?, contenido = ?, imagen = ? WHERE idBlog = ? AND activo = 1`,
    [titulo, contenido, imagen, id]
  );
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
