import Swal from "sweetalert2";

export const ShowNotification = (msg) =>
  Swal.fire({
    icon: "success",
    title: `📝 ${msg}`,
    showConfirmButton: false,
    timer: 1500,
  });
export const ShowNotificationError = (msg) => {
  Swal.fire({
    icon: "error",
    title: `🚫 ${msg}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const objectToFormData = (obj) => {
  const formData = new FormData();
  Object.keys(obj).forEach((e) => {
    formData.append(e, obj[e]);
  });

  return formData;
};

export const formatearFecha = (diaMesAnio) => {
  const d = new Date(diaMesAnio);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

export const getFechaActual = () => {
  const tiempoTranscurrido = Date.now();
  const hoy = formatearFecha(new Date(tiempoTranscurrido));
  return hoy;
};

export const formatearEstudiante = (data) => {
  const arrAux = [];
  data.forEach((e) => {
    const value = e.idEstudiante;
    const name = `${e.nombre} ${e.apellido} - ${e.dni}`;
    arrAux.push({ value, name });
  });
  return arrAux;
};
export const formatearCarrera = (data) => {
  const arrAux = [];
  data.forEach((e) => {
    const value = e.idCarrera;
    const name = `${e.nombre}`;
    arrAux.push({ value, name });
  });
  return arrAux;
};

export const formatText = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
