//hacemos los requerimientos de la Base de Datos 
const mysql = require('mysql2');

//Establece la Conexion desde Node a mysql
const conexion = mysql.createConnection({
    host:'localhost',
    user: 'bedelia12',
    database:'bedelia12',
    password:'2023$prog3'
});

module.exports={
    conexion,
}
