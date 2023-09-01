const express = require('express');

//mi app del servidor 
const app = express();

const port = process.env.PUERTO || 3005;
app.get('/', (req, res) => {
res.type('text/plain');
res.status(200);
res.send('Hola soy una app Express!');
});
app.listen(port, () => console.log(`Express started on http://localhost:${port}`));