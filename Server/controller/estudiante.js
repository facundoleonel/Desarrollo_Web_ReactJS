
const expr = require("express");
const { conexion } = require("../db/config");
const estudiantesBD = require('../db/estudiantesBD');

//Hago una consulta
// const getEstudiantes = (req, res = expr.response) => {
//   // app.get('/estudiantes')=req.body;
//   const consulta = "SELECT * FROM estudiante where activo = 1";
//   conexion.execute(consulta, (error, resultado, campos) => {
//     if (error) {
//       res.status(500).json({
//         msg: "Se produjo un error al buscar los estudiantes",
//         err: error,
//       });
//       console.log(error);
//     } else {
//       console.log(campos);
//       res.status(200).json(resultado);
//     }
//   });
// };

//Busqueda del Estudiante por el ID
buscarPorID = async (req, res) => {
  try {
    const idEstudiante = req.params.idEstudiante;

    if (!idEstudiante) {
      res.status(404).json({ estado: 'FALLO', msj: 'Falta el id' });
    }

    const estudiantes = await estudiantesBD.buscarPorID(idEstudiante);

    res.json({ estado: 'OK', dato: estudiantes });

  } catch (exec) {
    throw exec;
  }
}

buscarTodos = async (req, res) => {
  try {
    const estudiantes = await estudiantesBD.buscarTodos();

    res.json({ estado: 'OK', dato: estudiantes });

  } catch (exec) {
    throw exec;
  }
}

eliminar = async (req, res) => {
  const idEstudiante = req.params.idEstudiante;

  if (!idEstudiante) {
    res.status(404).json({ estado: 'FALLO', msj: 'no se especifico el id del estudiante' });
  } else {
    try {
      await estudiantesBD.eliminar(idEstudiante);
      res.status(200).json({ estado: 'OK', msj: 'estduiante eliminado' });
    } catch (error) {
      console.log(error);
    }
  }

}

crear = async (req, res) => {

  const { dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular, foto } = req.body;

  if (!dni || !nombre || !apellido || !fechaNacimiento || !nacionalidad || !correoElectronico) {
    res.status(404).json({ estado: 'FALLO', msj: 'Faltan datos obligatorios' });
  } else {
    const estudiante = { dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular, foto };
    try {
      const estudianteNuevo = await estudiantesBD.nuevo(estudiante);
      res.status(201).json({ estado: 'OK', msj: 'estudiante creado', dato: estudianteNuevo });
    } catch (error) {
      console.log(error);
    }
  }

}

actualizarPorID = async (req, res) => {
  try {
    const idEstudiante = req.params.idEstudiante;
    const nuevoData = req.body; // Supongo que los nuevos datos están en el cuerpo de la solicitud

    if (!idEstudiante) {
      res.status(404).json({ estado: 'FALLO', msj: 'Falta el id' });
      return; // Debes salir de la función aquí para evitar ejecución adicional
    }

    const resultado = await estudiantesBD.actualizarPorID(idEstudiante, nuevoData);

    if (resultado) {
      res.json({ estado: 'OK', msj: 'Registro actualizado correctamente' });
    } else {
      res.status(404).json({ estado: 'FALLO', msj: 'No se encontró el estudiante con el ID proporcionado' });
    }

  } catch (error) {
    console.error(error);
  }
}

// const getEstudiante = (req = expr.request, res) => {
// get parametro
// google.com/?id=123
// const params = req.params
// params?.id
// post body
// { id: 123 }
// const body = req.body
// body?.id
// };

module.exports = {
  // getEstudiantes,
  buscarPorID,
  buscarTodos,
  eliminar,
  crear,
  actualizarPorID
};
