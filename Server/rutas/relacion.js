const { Router } = require("express");
const {
  crearCM,
  getCM,
  crearEC,
  getEC,
  crearEM,
} = require("../controller/relacion");

const router = Router();

// Agregar carrera - materia
router.post("/carreramateria", crearCM);
// Obtener carrera - materia
router.get("/carreramateria/:id", getCM);

// Agregar estudiante - carrera
router.post("/estudiantecarrera", crearEC);
// Obtener estudiante - carrera
router.get("/estudiantecarrera/:id", getEC);

// Agregar estudiante - materias
router.post("/estudiantemateria", crearEM);
// Obtener estudiante - materias
// router.get('/estudiantemateria/:id', getEM);

module.exports = router;
