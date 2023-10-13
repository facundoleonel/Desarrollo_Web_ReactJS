import axios from "axios";
import { ShowNotification } from "./utils";
const baseURL = "http://localhost:3005/api";

export const obtenerEstudiantes = async () => {
  let result = [];

  await axios
    .get(`${baseURL}/estudiantes`)
    .then(({ data }) => {
      result = data?.dato || [];
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

export const crearEstudiante = async (estudiante) => {
  await axios
    .post(`${baseURL}/estudiantes`, estudiante)
    .then((resp) => {
      if (resp.status === 200) {
        ShowNotification( resp.data.msg )
      }
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};
