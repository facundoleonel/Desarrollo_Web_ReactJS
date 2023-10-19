const { Router } = require("express");
const { buscar } = require("../controller/usuario");

const router = Router();

//Agregar
router.post("/", buscar);
//buscarTodos los elementos activos

module.exports = router;
