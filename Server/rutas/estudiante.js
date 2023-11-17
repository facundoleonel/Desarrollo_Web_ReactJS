const { Router } = require('express');
const { uploadFile } = require('./../controller/multimedia');
const {
  crear,
  obtener,
  buscar,
  actualizar,
  eliminar,
} = require('../controller/estudiante');

const router = Router();

//Agregar
router.post('/', uploadFile.single("foto"), crear);
//buscarTodos los elementos activos
router.get('/', obtener);
//BuscarPorID
router.get('/:id', buscar);
// Actualizar
router.put('/:id', actualizar);
//eliminar
router.delete('/:id', eliminar);

module.exports = router;