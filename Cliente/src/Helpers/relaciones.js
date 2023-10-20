import axios from "axios";

const baseURL = "http://localhost:3005/api";

export const crearCarreraMateria = async (idCarrera, idMateria) => {
  let result = false;
  await axios
    .post(`${baseURL}/relacion/carreramateria`, { idCarrera, idMateria })
    .then(({ data }) => {
        const response = data.dato;
        if(Object.values(response).length > 0){
            result = response
        }
    })
    .catch(console.log);
  return result;
};
