const express = require("express");

//mi app del servidor
const app = express();

const port = process.env.PUERTO || 3005;

app.get("/", (req, res) => {
  res.type("text/plain");
  res.status(200);
  res.send("Hola soy una app Express!");
});

app.get("/carreras", (req, res) => {
  res.type("application/json");
  res.status(200);
  res.send([
    {
      titulo: "Tecnicatura desarrollo web",
      duracion: 3,
    },
    {
      titulo: "Turismo",
      duracion: 5,
    },
    {
      titulo: "Administracion",
      duracion: 5,
    },
  ]);
});

app.listen(port, () =>
  console.log(`Express started on http://localhost:${port}`)
);
