const { Router } = require("express");
const { Login } = require("../controller/usuario");

const router = Router();

//Agregar
router.post("/", Login);

module.exports = router;
