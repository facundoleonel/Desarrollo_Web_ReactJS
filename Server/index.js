const { ContactoPost } = require("./controller/contacto");
const {getEstudiantes} = require("./controller/estudiante");
// Express
const express = require("express");
// para gestinar cors
const cors = require("cors");
// para loguear las peticiones que recibe el servidor
var morgan = require("morgan");
//para trabajar con el sistema de archivos: crear leer etc archivos
var fs = require("fs");
// trabajar con las rutas de archivos y directorios del sistema de archivos
var path = require("path");
const {
  GET_Crud,
  GET_Crud_id,
  POST_Crud,
  DELETE_Crud_id,
} = require("./controller/crud");


// manejo de variables de entorno
require("dotenv").config();

//mi app del servidor
const app = express();

// recibimos datos en formato json
app.use(express.json());
// urlconded se encarga de analizar los datos codificados en la url y los coloca en el req.body
// para poder trabajar con ellos en el manejador de la ruta.
app.use(express.urlencoded({ extended: true }));

// CREA UN ARCHIVO DE ACCESO
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.use(cors());

// endpoint de testeo del API
app.get("/", (req, res) => {
  const saludo = { estado: true, mensaje: "bienvenido!" };
  res.status(200).json(saludo);
});

app.post("/contacto", ContactoPost);

app.get("/estudiantes", getEstudiantes);


// Crud
app.get("/crud", GET_Crud);
app.get("/crud/:id", GET_Crud_id);
app.post("/crud", POST_Crud);
app.delete("/crud:id", DELETE_Crud_id);

app.listen(process.env.PUERTO, () => {
  console.log("API Facultad Iniciada" + process.env.PUERTO);
});
