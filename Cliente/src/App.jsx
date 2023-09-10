import "./Assets/css/App.css";
import { Layout } from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./Pages/Inicio";
import { Institucion } from "./Pages/Institucion";
import { Contacto } from "./Pages/Contacto";
import { Login } from "./Pages/Login";
import { Error } from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/institucion" element={<Institucion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/404" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
