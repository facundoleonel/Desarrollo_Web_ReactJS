const relacionBD = require("../db/relacionBD");
const { Message } = require("./contants");

/**
 * Esta función registra la relacion entre carrera y materia
 * @param {object} req - request
 * @param {object} res - response.
 * @returns {object} - estado de la peticion
 */
const crearCM = async (req, res) => {
  try {
    const { idCarrera, idMateria } = req.body;
    if (idCarrera === "" && idMateria === "") {
      res.status(404).json({ msg: Message.faltaObligatorio });
    }
    const dato = await relacionBD.crearCM({ idCarrera, idMateria, activo: 1 });
    res
      .status(200)
      .json({ msg: Message.elementoCreado, dato });
  } catch (err) {
    res.status(404).json({ msg: `${Message.error}: ${err}` });
    throw err;
  }
};
const crearEC = async (req, res) => {
  try {
    const { idEstudiante, idCarrera } = req.body;
    if (idEstudiante === "" && idCarrera === "") {
      res.status(404).json({ msg: Message.faltaObligatorio });
    }
    const dato = await relacionBD.crearEC({ idEstudiante, idCarrera, activo: 1 });
    res
      .status(200)
      .json({ msg: Message.elementoCreado, dato });
  } catch (err) {
    res.status(404).json({ msg: `${Message.error}: ${err}` });
    throw err;
  }
};

const getEC = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ msg: Message.faltaId });
    }
    const dato = await relacionBD.buscarEC(id);
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
const getCM = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ msg: Message.faltaId });
    }
    const dato = await relacionBD.buscarCM(id);
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

module.exports = {
  crearCM,
  crearEC,
  getEC,
  getCM,
};
