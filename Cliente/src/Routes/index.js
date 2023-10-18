import { Estudiante } from "../Pages/Panel/Estudiante";
import { Panel } from "../Pages/Panel";
import { Carrera } from "../Pages/Panel/Carreras";
import { Materia } from "../Pages/Panel/Materias";
import { Blog } from "../Pages/Panel/Blog";

export const bedeliaRoutes = [
  { path: "/panel", name: "Home", component: <Panel /> },
  { path: "/panel/estudiante", name: "Estudiantes", component: <Estudiante /> },
  { path: "/panel/carrera", name: "Carreras", component: <Carrera/> },
  {path:"/panel/materia",name:"Materias",component:<Materia/>},
  {path:"/panel/blog",name:"Blog",component:<Blog/>},
];

export const decanoRoutes = [
  { path: "/panel", name: "Home", component: <Panel /> },
];