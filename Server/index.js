const express = require("express");

//envio de correo electronico
const nodemailer = require('nodemailer');

// para gestinar cors
const cors = require('cors');

// para loguear las peticiones que recibe el servidor
var morgan = require('morgan')
//para trabajar con el sistema de archivos: crear leer etc archivos
var fs = require('fs')
// trabajar con las rutas de archivos y directorios del sistema de archivos
var path = require('path');

// manejo de variables de entorno
require('dotenv').config();

//mi app del servidor
const app = express();

// recibimos datos en formato json
app.use(express.json());
// urlconded se encarga de analizar los datos codificados en la url y los coloca en el req.body 
// para poder trabajar con ellos en el manejador de la ruta.
app.use(express.urlencoded({extended:true}))

// CREA UN ARCHIVO DE ACCESO
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use(cors());

// endpoint de testeo del API
app.get('/', (req, res)=>{
  const saludo = {estado:true, mensaje:'bienvenido!'}
  res.status(200).json(saludo);
});

app.post('/contacto', (req, res)=>{
  const {nombre, correo, mensaje} = req.body;
  console.log(nombre);

  const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
          user:process.env.CORREO,
          pass:process.env.CLAVE
      }
  })

  const cuerpo = `<h1>Hola llego un correo de ${nombre}</h1>`;

  const opciones = {
      from : 'api prog3',
      to:'facundopanozzo@gmail.com',
      subject:'titulo',
      html:cuerpo
  }

  transporter.sendMail(opciones, (error, info) => {
      if(error){
          // console.log('error -> ', error);
          const respuesta = 'correo no enviado';
          res.json({respuesta});
      }else{
          // console.log(info);
          const respuesta = 'correo enviado';
          res.json({respuesta});
      }
  })
})

app.listen(process.env.PUERTO, () =>{
  console.log('API Facultad Iniciada' + process.env.PUERTO);
})


// const port = process.env.PUERTO || 3005;

// app.get("/", (req, res) => {
//   res.type("text/plain");
//   res.status(200);
//   res.send("Hola soy una app Express!");
// });

// app.get("/carreras", (req, res) => {
//   res.type("application/json");
//   res.status(200);
//   res.send([
//     {
//       titulo: "Tecnicatura desarrollo web",
//       duracion: 3,
//     },
//     {
//       titulo: "Turismo",
//       duracion: 5,
//     },
//     {
//       titulo: "Administracion",
//       duracion: 5,
//     },
//   ]);
// });

// app.listen(port, () =>
//   console.log(`Express started on http://localhost:${port}`)
// );
