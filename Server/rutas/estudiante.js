const {Router} = require('express');

const {buscarPorID,buscarTodos,eliminar,crear} = require('../controller/estudiante');

const router = Router();

//Agregar
router.post('/estudiante',crear);

// Actualizar
// router.put('/estudiantes/:idEstudiante');
//eliminar
router.delete('/estudiantes/:idEstudiantes',eliminar);
//buscarTodos
router.get('/estudiantes',buscarTodos);
//BuscarPorID
router.get('/estudiantes/:idEstudiantes',buscarPorID);

module.exports = router;