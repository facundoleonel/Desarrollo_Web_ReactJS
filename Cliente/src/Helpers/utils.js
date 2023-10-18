import Swal from "sweetalert2";

export const ShowNotification = (msg) =>
  Swal.fire({
    icon: "success",
    title: `📝 ${msg}`,
    showConfirmButton: false,
    timer: 1500,
  });


export const formatearFecha = (diaMesAnio)=>{
  const d = new Date(diaMesAnio);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}