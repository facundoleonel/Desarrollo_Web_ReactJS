const materiasBD = require("../db/materiasBD");
const { Message } = require("./contants");

/**
 * Esta función crea un elemento y devuelve objeto en caso de exito.
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const crear = async (req, res) => {
  const { horasSemanales, nombre, idCarrera} = req.body;
  if (!horasSemanales || !nombre ) {
    res.status(404).json({ msg: Message.faltaObligatorio });
  } else {
    const materia = { horasSemanales, nombre, idCarrera, activo: 1};
    try {
      const dato = await materiasBD.crear(materia);
      res.status(200).json({ msg: Message.elementoCreado, dato });
    } catch (err) {
      res.status(404).json({ msg: `${Message.error}: ${err}` });
    }
  }
};

/**
 * Esta función obtiene todos los elementos.
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const obtener = async (req, res) => {
  try {
    const dato = await materiasBD.obtener();
    res.status(200).json({ dato });
  } catch (err) {
    res.status(404).json({ msg: `${Message.error}: ${err}` });
    throw err;
  }
};

/**
 * Esta función busca un elemento por su id y devuelve el objeto en caso de exito.
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const buscar = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ msg: Message.faltaId });
    }
    const dato = await materiasBD.buscar(id);
    res.status(200).json({ dato });
  } catch (err) {
    res.status(404).json({ msg: `${Message.error}: ${err}` });
    throw err;
  }
};

/**
 * Esta función actualiza un elemento por su id y devuelve el objeto en caso de exito.
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const actualizar = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ msg: Message.faltaId });
      return;
    }
    const { horasSemanales } = await materiasBD.buscar(id);
    if (horasSemanales) {
      try {
        // Existe el elemento a actualizar
        const nuevoData = req.body;
        await materiasBD.actualizar(id, nuevoData);
        res.status(200).json({ msg: Message.elementoActualizado });
      } catch (err) {
        res.status(404).json({ msg: `${Message.error}: ${err}` });
      }
    } else {
      res.status(404).json({ msg: Message.elementoNoEncontrado });
    }
  } catch (err) {
    res.status(404).json({ msg: `${Message.error}: ${err}` });
  }
};

/**
 * Esta función elimina un elemento por su id y devuelve el objeto en caso de exito.
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const eliminar = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ msg: Message.faltaId });
  } else {
    try {
      const dato = await materiasBD.buscar(id);
      if (dato?.horasSemanales) {
        await materiasBD.eliminar(id);
        res.status(200).json({ msg: Message.elementoEliminado, dato });
      } else {
        res.status(404).json({ msg: Message.elementoNoEncontrado });
      }
    } catch (err) {
      res.status(404).json({ msg: `${Message.error}: ${err}` });
    }
  }
};

module.exports = {
  crear,
  obtener,
  buscar,
  actualizar,
  eliminar,
};
