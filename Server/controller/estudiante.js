

const expr = require("express");
const { conexion } = require("../config");

//Hago una consulta
const getEstudiantes = (req, res = expr.response) => {
  // app.get('/estudiantes')=req.body;
  const consulta = "SELECT * FROM estudiante where activo = 1";
  conexion.execute(consulta, (error, resultado, campos) => {
    if (error) {
      res.status(500).json({
        msg: "Se produjo un error al buscar los estudiantes",
        err: error,
      });
      console.log(error);
    } else {
      console.log(campos);
      res.status(200).json(resultado);
    }
  });
};

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
  getEstudiantes,
};
