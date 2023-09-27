const { conexion } = require("./config");

const buscarPorID = async (idEstudiante) => {
  const consulta = `SELECT  dni, nombre, apellido,
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
    WHERE activo = 1 AND idEstudiante = ?`;

  const [estudiantes] = await conexion.query(consulta, idEstudiante);

  return estudiantes;
};

const buscarTodos = async () => {
  const consulta = `SELECT  dni, nombre, apellido,fechaNacimiento,correoElectronico,celular,foto,
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
    WHERE activo = 1 `;

  const [estudiantes] = await conexion.query(consulta);

  return estudiantes;
};

const eliminar = async (idEstudiante) => {
  const consulta = `UPDATE estudiante SET activo = 0 WHERE idEstudiante = ${idEstudiante}`;
  await conexion.query(consulta);
};

const nuevo = async (estudiante) => {
  const consulta = "INSERT INTO estudiante SET ?";
  const [estudianteNuevo] = await conexion.query(consulta, estudiante);

  return buscarPorID(estudianteNuevo.insertId);
};

const actualizarPorID = async (idEstudiante, nuevosDatos) => {
  const consulta = `
      UPDATE estudiante
      SET
        dni = ?,
        nombre = ?,
        apellido = ?,
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
    `;

  const { dni, nombre, apellido, nacionalidad } = nuevosDatos;

  const result = await conexion.query(consulta, [
    dni,
    nombre,
    apellido,
    nacionalidad,
    idEstudiante,
  ]);

  return result.affectedRows > 0;
  //result.affectedRows: verifica si se actualizó al menos una fila en la base de datos. 
  //Devolverá true si la actualización fue exitosa y false si no se encontró ningún estudiante 
  //con el ID proporcionado o si no se realizó ninguna actualización.
};

module.exports = {
  buscarPorID,
  buscarTodos,
  eliminar,
  nuevo,
  actualizarPorID,
};
