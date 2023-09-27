const { Router } = require('express');

const { buscarPorID, buscarTodos, eliminar, crear, actualizarPorID } = require('../controller/estudiante');

const router = Router();

//Agregar
router.post('/estudiantes', crear);

// Actualizar
router.put('/estudiantes/:idEstudiante', actualizarPorID);

//eliminar
router.delete('/estudiantes/:idEstudiante', eliminar);
//buscarTodos
router.get('/estudiantes', buscarTodos);
//BuscarPorID
router.get('/estudiantes/:idEstudiante', buscarPorID);

module.exports = router;