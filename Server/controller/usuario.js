const usuarioBD = require("../db/usuarioBD");
const { Message } = require("./contants");

/**
 * Esta función busca un elemento por su correo y clave
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const buscar = async (req, res) => {
  try {
    const {correoElectronico, clave} = req.body;
    if (!correoElectronico && !clave) {
      res.status(404).json({ msg: Message.faltaId });
    }
    const dato = await usuarioBD.buscar(correoElectronico, clave);
    res.status(200).json({ dato });
  } catch (err) {
    res.status(404).json({ msg: `${Message.error}: ${err}` });
    throw err;
  }
};


module.exports = {
  buscar,
};
