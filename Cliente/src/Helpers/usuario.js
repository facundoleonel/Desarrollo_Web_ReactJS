import axios from "axios";

const baseURL = "http://localhost:3005/api";

export const loginToken = async (correo, clave) => {
  let result = false;
  await axios
    .post(`${baseURL}/usuario`, {
      correoElectronico: correo,
      clave,
    })
    .then(({ data }) => {
        const response = data.token;
        if(Object.values(response).length > 0){
            result = response
        }
    })
    .catch(console.log);
  return result;
};
