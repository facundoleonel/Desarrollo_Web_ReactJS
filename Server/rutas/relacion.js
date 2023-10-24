const { Router } = require('express');
const {
  crearCM,
  getEC,
} = require('../controller/relacion');

const router = Router();

//Agregar
router.post('/carreramateria', crearCM);
// Obtener estudiante - carrera
router.get('/estudiantecarrera/:id', getEC);

module.exports = router;