import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Banner } from "../Components/Home/Banner";
import { AccesosRapidos } from "../Components/Home/AccesosRapidos";
import { Articulos } from "../Components/Home/Articulos";
import { crudBlog } from "../Helpers/crud";

export const Inicio = () => {
  const [bannerArticulos, setBannerArticulos] = useState([]);
  const [articulos, setArticulos] = useState([]);

  const obtenerTodos = async () => {
    const data = await crudBlog.obtener();
    setBannerArticulos(data.slice(0, 3));
    setArticulos(data.slice(3, 6));
  };
  useEffect(() => {
    obtenerTodos();
  }, []);

  return (
    <Container>
      <Banner posts={bannerArticulos} />
      <AccesosRapidos />
      <Articulos posts={articulos} />
    </Container>
  );
};
