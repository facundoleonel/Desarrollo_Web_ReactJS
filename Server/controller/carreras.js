const carreraBD = require('../db/carrerasBD');
const {Message} = require('./contants');

/**
 * Esta función crea un elemento y devuelve objeto en caso de exito.
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */

const crear = async (req,res) => {
    const {nombre, modalidad} = req.body;
    if ( !nombre || !modalidad ) {
        res
          .status(404)
          .json({ msg: Message.faltaObligatorio });
      } else {
      const carrera = { nombre, modalidad, activo: 1 };
        try {
          const dato = await carreraBD.crear(carrera);
          res
            .status(200)
            .json({ msg: Message.elementoCreado, dato });
        } catch (err) {
          res
            .status(404)
            .json({ msg: `${Message.error}: ${err}` })
        }
      }
}

/**
 * Esta función obtiene todos los elementos.
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const obtener = async (req, res) => {
    try {
      const dato = await carreraBD.obtener();
      res
        .status(200)
        .json({ dato });
    } catch (err) {
      res
        .status(404)
        .json({ msg: `${Message.error}: ${err}` });
      throw err;
    }
  }
  
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
        res
          .status(404)
          .json({ msg: Message.faltaId });
      }
      const dato = await carreraBD.buscar(id);
      res
        .status(200)
        .json({ dato });
    } catch (err) {
      res
        .status(404)
        .json({ msg: `${Message.error}: ${err}` });
      throw err;
    }
  }

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
        res
          .status(404)
          .json({ msg: Message.faltaId });
        return;
      }
      const { nombre } = await carreraBD.buscar(id);
      if (nombre) {
        try {
          // Existe el elemento a actualizar
          const nuevoData = req.body;
          await carreraBD.actualizar(id, nuevoData);
          res
            .status(200)
            .json({ msg: Message.elementoActualizado });
        } catch (err) {
          res
            .status(404)
            .json({ msg: `${Message.error}: ${err}` });
        }
      } else {
        res
          .status(404)
          .json({ msg: Message.elementoNoEncontrado });
      }
    } catch (err) {
      res
        .status(404)
        .json({ msg: `${Message.error}: ${err}` });
    }
  }
  
  /**
   * Esta función elimina un elemento por su id y devuelve el objeto en caso de exito.
   * @param {object} req - request
   * @param {object} res - response.
   * @returns {object} - estado de la peticion
   */
  const eliminar = async (req, res) => {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ msg: Message.faltaId });
    } else {
      try {
        const dato = await carreraBD.buscar(id);
        if (dato?.nombre) {
          await carreraBD.eliminar(id);
          res
            .status(200)
            .json({ msg: Message.elementoEliminado, dato });
        }else{
          res
            .status(404)
            .json({ msg: Message.elementoNoEncontrado});
        }
      } catch (err) {
        res
          .status(404)
          .json({ msg: `${Message.error}: ${err}` });
      }
    }
  }


module.exports = {
    crear,
    obtener,
    buscar,
    actualizar,
    eliminar
}