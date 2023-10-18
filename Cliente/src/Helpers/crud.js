import axios from "axios";
import { ShowNotification } from "./utils";

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
    await axios
      .post(`${baseURL}/${this.collection}`, elemento)
      .then((resp) => {
        if (resp.status === 200) {
          ShowNotification(resp.data.msg);
        }
      })
      .catch(console.log);
  }

  async editar(id, elemento) {
    await axios
      .put(`${baseURL}/${this.collection}/${id}`, elemento)
      .then((resp) => {
        if (resp.status === 200) {
          ShowNotification(resp.data.msg);
        }
      })
      .catch(console.log);
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
