import axios from "axios";
import { ShowNotification, objectToFormData } from "../utils";

const baseURL = "http://localhost:3005/api";
export class CRUD {
  constructor(name = "") {
    this.collection = name;
  }

  async obtener() {
    let result = [];
    await axios
      .get(`${baseURL}/${this.collection}`)
      .then(({ data }) => {
        result = data?.dato || [];
      })
      .catch(console.log);
    return result;
  }

  async crear(elemento) {
    let result = false;
    const formData = objectToFormData(elemento);
    await axios
      .post(`${baseURL}/${this.collection}`, formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((resp) => {
        if (resp.status === 200) {
          ShowNotification(resp.data.msg);
          result = resp.data.dato;
        }
      })
      .catch(console.log);
    return result;
  }
  async buscar(id) {
    let result = false;
    await axios
      .get(`${baseURL}/${this.collection}/${id}`)
      .then(({ data }) => {
        result = data?.dato || [];
      })
      .catch(console.log);
    return result;
  }
  async editar(id, elemento) {
    let result = false;
    await axios
      .put(`${baseURL}/${this.collection}/${id}`, elemento)
      .then((resp) => {
        if (resp.status === 200) {
          ShowNotification(resp.data.msg);
          result = resp.data.dato;
        }
      })
      .catch(console.log);
    return result;
  }

  async eliminar(id) {
    await axios
      .delete(`${baseURL}/${this.collection}/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          ShowNotification(resp.data.msg);
        }
      })
      .catch(console.log);
  }
}
