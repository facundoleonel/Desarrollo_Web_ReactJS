const { Router } = require('express');
const {
  crearCM,
} = require('../controller/relacion');

const router = Router();

//Agregar
router.post('/carreramateria', crearCM);

module.exports = router;