const { ContactoPost } = require("./controller/contacto");
const { statusConexion } = require("./db/config");
// routes
const Estudiante = require("./rutas/estudiante");
const Carrera = require("./rutas/carreras");
const Materia = require("./rutas/materias");
const Blog = require("./rutas/blog");
const Usuario = require("./rutas/usuario");
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

app.post("/contacto", ContactoPost);
app.use("/api/estudiantes", Estudiante);
app.use("/api/carreras", Carrera);
app.use("/api/materias", Materia);
app.use("/api/blog", Blog);
app.use("/api/usuario", Usuario);
app.get("/", statusConexion);

app.listen(process.env.PUERTO, () => {
  console.log("API Facultad Iniciada en el puerto: " + process.env.PUERTO);
});
