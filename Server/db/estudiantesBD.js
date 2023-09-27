const { conexion } = require('./config');

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
}

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
}

const eliminar = async (idEstudiante) => {
    const consulta = `UPDATE estudiante SET activo = 0 WHERE idEstudiante = ${idEstudiante}`
    await conexion.query(consulta);
}

const nuevo = async (estudiante) => {

    const consulta = 'INSERT INTO estudiante SET ?';
    const [estudianteNuevo] = await conexion.query(consulta, estudiante)

    return buscarPorID(estudianteNuevo.insertId);
}

module.exports = {
    buscarPorID,
    buscarTodos,
    eliminar,
    nuevo
}