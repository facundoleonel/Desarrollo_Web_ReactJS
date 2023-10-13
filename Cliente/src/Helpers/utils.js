import Swal from "sweetalert2";

export const ShowNotification = (msg) =>
  Swal.fire({
    icon: "success",
    title: `📝 ${msg}`,
    showConfirmButton: false,
    timer: 1500,
  });
