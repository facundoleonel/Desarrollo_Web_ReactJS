import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { userContext } from "../../Layout";
import { Container, Col, Card, Button, Table } from "react-bootstrap";
import { Formulario } from "../../Components/Panel/Estudiante/Formulario";

export const Estudiante = () => {
  const baseURL = "http://localhost:3005/api";

  //datos de estudiantes
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    buscarEstudiantes();
  }, []);

  const buscarEstudiantes = async () => {
    axios
      .get(baseURL + "/estudiantes")
      .then((res) => {
        console.log(res);
        setDatos(res.data.dato);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarEstudiante = async (idEstudiante) => {
    axios
      .delete(baseURL + "/estudiantes/" + idEstudiante)
      .then((res) => {
        buscarEstudiantes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const editarEstudiante = async (idEstudiante) => {
  //   axios
  //     .put(baseURL + "/estudinates/" + idEstudiante, formulario)
  //     .then((res) => {
  //       buscarEstudiantes();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  
  const { currentUser, logoutUser } = useContext(userContext);
  return (
    <>
      <div>
        Estudiante
        {JSON.stringify(currentUser)}
        <button onClick={() => logoutUser()}>Quitar usuario</button>
      </div>
      <Container className="mt-5 mb-4">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Formulario actualizarTabla={buscarEstudiantes} />  
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="miThead">Legajo</th>
              <th className="miThead">DNI</th>
              <th className="miThead">Apellido</th>
              <th className="miThead">Nombre</th>
              <th className="miThead">Nacionalidad</th>
              <th className="miThead">Correo Electrónico</th>
              <th className="miThead">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {datos ? (
              datos.map((item, index) => (
                <tr key={index}>
                  <td>{item.idEstudiante}</td>
                  <td>{item.dni}</td>
                  <td>{item.apellido}</td>
                  <td>{item.nombre}</td>
                  <td>{item.nacionalidad}</td>
                  <td>{item.correoElectronico}</td>
                  <td>
                    <Button
                      variant="success"
                      className="miBoton"
                      // onClick={() => editarEstudiante(item.idEstudiante)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => eliminarEstudiante(item.idEstudiante)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>{/* TAREA: un mensaje o similar  */}</tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
