import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { userContext } from "../../Layout";
import {
  Container,
  Col,
  Card,
  Form,
  Row,
  Button,
  Table,
} from "react-bootstrap";

export const Estudiante = () => {
  const baseURL = "http://localhost:3005/api";

  //objetos para almacenar la informacion del formulario
  const [formulario, setFormulario] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    nacionalidad: "",
    correoElectronico: "",
    fechaNacimiento: "",
  });

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

  const editarEstudiante = async(idEstudiante) => {
    axios.put(baseURL + '/estudinates/'+ idEstudiante,formulario)
    .then((res)=>{
      buscarEstudiantes();
    })
    .catch((error)=>{
      console.log(error);
    });
  };

  const enviarInformacion = async(e)=>{
    e.preventDefault();
    // console.log(formulario);
    axios.post(baseURL + '/estudiantes',formulario)
    .then(resp => {
      console.log(resp);
      if(resp.status ===200){
        alert(resp.data.msg);
        buscarEstudiantes()
      }
    })
    .catch(error => {
      console.log(error);
    })
    // .then((res) => {
    //     console.log(res);
    //     // alert(res.data.msj);
    //     setFormulario({
    //         dni:'', 
    //         nombre:'', 
    //         apellido:'', 
    //         correoElectronico:'', 
    //         nacionalidad:'',
    //         fechaNacimiento:''});
    //     buscarEstudiantes();
    // })
    // .catch( error=> {
    //     console.log('error ', error);
    // });
}

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
              <Form onSubmit={e => enviarInformacion(e)} >
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicDni">
                      <Form.Label>DNI</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setFormulario({ ...formulario, dni: e.target.value })
                        }
                        value={formulario.dni}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setFormulario({
                            ...formulario,
                            nombre: e.target.value,
                          })
                        }
                        value={formulario.nombre}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicApellido">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setFormulario({
                            ...formulario,
                            apellido: e.target.value,
                          })
                        }
                        value={formulario.apellido}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicNacionalidad"
                    >
                      <Form.Label>Nacionalidad</Form.Label>
                      <Form.Select defaultValue="Nacionalidad">
                        <option value="">Seleccione una opción</option>
                        <option value="0">Argentino</option>
                        <option value="1">Uruguayo</option>
                        <option value="2">Chileno</option>
                        <option value="3">Paraguayo</option>
                        <option value="4">Brasilero</option>
                        <option value="5">Boliviano</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Correo Electronico</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setFormulario({
                            ...formulario,
                            correoElectronico: e.target.value,
                          })
                        }
                        value={formulario.correoElectronico}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEdad">
                      <Form.Label>Fecha de Nacimiento</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={(e) =>
                          setFormulario({
                            ...formulario,
                            fechaNacimiento: e.target.value,
                          })
                        }
                        value={formulario.fechaNacimiento}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                Crear
              </Button>
              </Form>
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
                    <Button variant="success" className="miBoton" onClick={()=>editarEstudiante(item.idEstudiante)}>
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
