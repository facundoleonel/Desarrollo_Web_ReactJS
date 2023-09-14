
//hacemos los requerimientos de la Base de Datos 
const mysql = require('mysql2');

//Establece la Conexion desde Node a mysql
const conexion = mysql.createConnection({
    host:'localhost',
    user: 'bedelia12',
    database:'bedelia12',
    password:'2023$prog3'
});

//Hago una consulta
const ConexionPost=(req,res)=>{
    // app.get('/estudiantes')=req.body;
    const consulta ='SELECT * FROM estudiante where activo = 1';
    conexion.execute(consulta,(error,resultado, campos)=>{
        if(error){
            console.log(error);
        }else{
            console.log(campos);
            res.status(200).json(resultado);
        }
    })
}
    // app.get('/estudiante',(req,res)=>{
    //     const consulta = 'SELECT * FROM estudiante where activo = 1';
    //     conexion.execute(consulta,(error,resultado, campos)=>{
    //         if(error){
    //             console.log(error);
    //         }else{
    //             console.log(campos);
    //             res.status(200).json(resultado);
    //         }
    //     })
    // });


module.exports = {
    ConexionPost
}


