import axios from "axios";
import { ShowNotification } from "./utils";
const baseURL = "http://localhost:3005/api";

export const obtenerCarrera = async () => {
  let result = [];

  await axios
    .get(`${baseURL}/carreras`)
    .then(({ data }) => {
      result = data?.dato || [];
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

export const crearCarrera = async (carrera) => {
    await axios
        .post(`${baseURL}/carreras`,carrera)
        .then((resp) => {
            if(resp.status === 200) {
                ShowNotification(resp.data.msg)
            }
        })
        .catch((error) => {
            console.log(error.response.data);
        })
}