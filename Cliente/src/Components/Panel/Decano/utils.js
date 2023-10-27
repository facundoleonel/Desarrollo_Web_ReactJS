import {
  crudBlog,
  crudCarrera,
  crudEstudiante,
  crudMateria,
} from "../../../Helpers/crud";

export const obtenerData = async () => {
  let result = {
    labels: [],
    series: [],
  };

  const totals = {
    blog: { name: "Blog", unit: 0, perc: 0 },
    estudiantes: { name: "Estudiantes", unit: 0, perc: 0 },
    carreras: { name: "Carreras", unit: 0, perc: 0 },
    materias: { name: "Materias", unit: 0, perc: 0 },
  };

  const blog = await crudBlog.obtener();
  const estudiantes = await crudEstudiante.obtener();
  const carreras = await crudCarrera.obtener();
  const materias = await crudMateria.obtener();

  totals.blog.unit = blog?.length || 0;
  totals.estudiantes.unit = estudiantes?.length || 0;
  totals.carreras.unit = carreras?.length || 0;
  totals.materias.unit = materias?.length || 0;

  let MAX = 0;
  Object.values(totals).forEach((e) => {
    MAX += e.unit;
  });

  Object.values(totals).forEach((e) => {
    e.perc = (e.unit * 100) / MAX;
  });

  Object.values(totals).forEach((e) => {
    result.labels.push(`${e.name} ${Math.floor(e.perc)}%`);
    result.series.push(e.perc);
  });

  return result;
};
