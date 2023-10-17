import axios from "axios";
import { ShowNotification } from "./utils";
const baseURL = "http://localhost:3005/api";

export const obtenerMateria = async () => {
    let result = []

    await axios
    .get(`${baseURL}/materias`)
    .then(({ data }) => {
      result = data?.dato || [];
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

export const crearMateria = async (materia) => {
    await axios
      .post(`${baseURL}/materias`, materia)
      .then((resp) => {
        if (resp.status === 200) {
          ShowNotification( resp.data.msg )
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };