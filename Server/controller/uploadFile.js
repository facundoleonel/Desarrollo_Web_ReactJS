const Multer = require("multer");

const utf8 = require("utf8");
const unorm = require("unorm");

const formatText = (text) => {
  let result = text;
  // Convierte el texto a utf8
  result = utf8.decode(result);
  // Convierte el texto sin signos
  result = unorm.nfd(result).replace(/[\u0300-\u036f]/g, "");
  // Quita espaciados
  result = result.replace(" ", "");
  return result;
};

const uploadFile = Multer({
  storage: Multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
      cb(null, `${formatText(file.originalname)}`);
    },
  }),
  limits: {
    fieldSize: 10000000,
  },
});

module.exports = {
  uploadFile,
};
