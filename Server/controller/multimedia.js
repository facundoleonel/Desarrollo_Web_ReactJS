const Multer = require("multer");
const uploadFile = Multer({
  storage: Multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  }),
  limits: {
    fieldSize: 10000000,
  },
});

module.exports = {
  uploadFile,
};
