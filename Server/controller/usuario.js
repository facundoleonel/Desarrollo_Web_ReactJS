const usuarioBD = require("../db/usuarioBD");
const { Message } = require("./contants");
const jwt = require("jsonwebtoken");

/**
 * Esta función busca un elemento por su correo y clave
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const Login = async (req, res) => {
  try {
    const { correoElectronico, clave } = req.body;
    if (!correoElectronico && !clave) {
      res.status(404).json({ msg: Message.faltaId });
    }
    const dato = await usuarioBD.Login(correoElectronico, clave);
    if (dato) {
      const token = jwt.sign(dato, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } else {
      res.status(404).json({ msg: `Usuario y contraseña invalidos` });
    }
  } catch (err) {
    res.status(404).json({ msg: `${Message.error}: ${err}` });
    throw err;
  }
};

module.exports = {
  Login,
};
