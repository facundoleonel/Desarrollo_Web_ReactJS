import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Layout";
import { bedeliaRoutes, decanoRoutes } from "../../Routes";
import { removeLocalUser } from "../../Helpers/localstorage";

export const NavBarPanel = ({ tipo = -1, nombre }) => {
  const navigate = useNavigate();
  const { logoutUser } = useContext(userContext)
  const [links, setLinks] = useState({
    listado: [],
    titulo: "",
  });

  useEffect(() => {
    tipo === 0 && setLinks({ titulo: "Panel bedelia", listado: bedeliaRoutes });
    tipo === 1 && setLinks({ titulo: "Panel decano", listado: decanoRoutes });
  }, [tipo]);


  const cerrarSesion = (e)=>{
    e.preventDefault();
    logoutUser();
    removeLocalUser();
    navigate("/")
  }

  return (
    <Nav>
      <hr style={{ color: "darkgray" }} />
      <Navbar.Text
        style={{ color: "darkgray", fontWeight: "bold" }}
      >
      {links.titulo}
      </Navbar.Text>
      {links.listado.map((e, k) => (
        <Nav.Link as={Link} key={k} to={e.path}>
          {e.name}
        </Nav.Link>
      ))}
      <Nav.Link style={{ color: "orange", fontWeight: "bold" }} onClick={cerrarSesion}>
        Logout
      </Nav.Link>
    </Nav>
  );
};
