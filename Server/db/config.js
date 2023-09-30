//hacemos los requerimientos de la Base de Datos 
const mysql = require('mysql2/promise');

//Establece la Conexion desde Node a mysql
const conexion = mysql.createPool({
    host: 'localhost',
    user: 'bedelia12',
    database: 'bedelia12',
    password: '2023$prog3'
})

const statusConexion = (req, res) => {
    res.status(200).json({ msg: "Server online - bienvenido!" });
};

module.exports = {
    conexion,
    statusConexion
}
