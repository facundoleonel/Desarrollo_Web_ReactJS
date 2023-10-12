import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Banner } from "../Components/Banner";
import { AccesosRapidos } from "../Components/AccesosRapidos";
import { Articulos } from "../Components/Articulos";


export const Inicio = () => {
  const [bannerArticulos, setBannerArticulos] = useState([])
  const [articulos, setArticulos] = useState([]);


  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=facebook&sortBy=popularity&apiKey=0240c08a06794076b7347d62d446c804`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //slice(0,4) que trae los primero cuatro contenidos del articles
        setBannerArticulos(data.articles.slice(0, 3));
        setArticulos(data.articles.slice(3, 8));
      });
  }, []);

  return (
    <Container>
      <Banner posts={bannerArticulos}/>
      <AccesosRapidos />
      <Articulos posts={articulos} />
    </Container>
  );
};
