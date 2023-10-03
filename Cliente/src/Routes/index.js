import { Estudiante } from "../Pages/Panel/Estudiante";
import { Panel } from "../Pages/Panel";

export const bedeliaRoutes = [
  { path: "/panel", name: "Home", component: <Panel /> },
  { path: "/panel/estudiante", name: "Estudiantes", component: <Estudiante /> },
  { path: "/panel/carrera", name: "Carreras", component: null },
];

export const decanoRoutes = [
  { path: "/panel", name: "Home", component: <Panel /> },
];