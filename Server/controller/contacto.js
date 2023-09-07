//envio de correo electronico
const nodemailer = require("nodemailer");

const ContactoPost = (req, res)=>{
    const { asunto, cuerpo, nombre, correo } = req.body;
    console.log(nombre);
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CORREO,
        pass: process.env.CLAVE,
      },
    });
  
    const htmlMessage = `
      <h1>[${asunto}]</h1>
      <p>Datos del remitente:</p>
      <ul>
        <li>Nombre: ${nombre}</li>
        <li>Correo: ${correo}</li>
      </ul>
      <p>Mensaje:</p>
      <p>${cuerpo}</p>
    `;
  
    const opciones = {
      from: "api prog3",
      to: "romemarce1@gmail.com",
      subject: asunto,
      html: htmlMessage,
    };
  
    transporter.sendMail(opciones, (error, info) => {
      if (error) {
        // console.log('error -> ', error);
        const respuesta = "correo no enviado";
        res.json({ respuesta });
      } else {
        // console.log(info);
        const respuesta = "correo enviado";
        res.json({ respuesta });
      }
    });
}

module.exports = {
    ContactoPost
}