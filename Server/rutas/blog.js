const { Router } = require('express');
const {
  crear,
  obtener,
  buscar,
  actualizar,
  eliminar,
} = require('../controller/blog');

const router = Router();

//Agregar
router.post('/', crear);
//buscarTodos los elementos activos
router.get('/', obtener);
//BuscarPorID
router.get('/:id', buscar);
// Actualizar
router.put('/:id', actualizar);
//eliminar
router.delete('/:id', eliminar);

module.exports = router;