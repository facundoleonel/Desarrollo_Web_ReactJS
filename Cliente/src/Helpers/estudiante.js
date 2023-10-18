import axios from "axios";
import { ShowNotification } from "./utils";
import { CRUD } from "./crud";
const baseURL = "http://localhost:3005/api";


export const crudEstudiante = new CRUD("estudiantes")

// export const obtenerEstudiantes = async () => {
//   let result = [];

//   await axios
//     .get(`${baseURL}/estudiantes`)
//     .then(({ data }) => {
//       result = data?.dato || [];
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return result;
// };

// export const crearEstudiante = async (estudiante) => {
//   await axios
//     .post(`${baseURL}/estudiantes`, estudiante)
//     .then((resp) => {
//       if (resp.status === 200) {
//         ShowNotification(resp.data.msg);
//       }
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//     });
// };

// export const editarEstudiante = async (idEstudiante) => {
//   await axios
//     .put(`${baseURL}/estudiantes/ ${idEstudiante}`)
//     .then((resp) => {
//       if (resp.status === 200) {
//         ShowNotification(resp.data.msg);
//       }
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//     });
// };

// // export const eliminarEstudiante = async (idEstudiante) => {
// //   await axios
// //     .delete(`${baseURL}/estudiantes/ ${idEstudiante}`)
// //     .then((resp) => {
// //       if (resp.status === 200) {
// //         ShowNotification(resp.data.msg);
// //       }
// //     })
// //     .catch((error) => {
// //       console.log(error.response.data);
// //     });
// // };
