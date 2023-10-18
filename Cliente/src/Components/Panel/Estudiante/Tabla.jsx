import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  BsFillPenFill as IconEdit,
  BsFillTrashFill as IconDelete,
} from "react-icons/bs";
import { useModal } from "../../../hooks/useModal";
import { ModalEditar } from "./ModalEditar";
import { ShowNotification } from "../../../Helpers/utils";
import { useNavigate} from 'react-router-dom';

const baseURL = "http://localhost:3005/api";


export const Tabla = ({ data = [], toDeleteAction }) => {
  const navigate = useNavigate();
  const [modal, setModal, toggle] = useModal( false ) // editar
  const [current, setCurrent] = useState({});

  const [thead, setThead] = useState([]);
  const excludeVar = ["activo"];
  const editarEstudiante = async (id) => {
      let re = data.find( e => e.idEstudiante === id)
      setCurrent(re);
      setModal(true)
  };

const eliminarEstudiante = async (idEstudiante) => {
    await axios
      .delete(`${baseURL}/estudiantes/ ${idEstudiante}`)
      .then((resp) => {
        if (resp.status === 200) {
          ShowNotification(resp.data.msg);
          toDeleteAction()
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  // const eliminarEstudiante = async (id) => {
  //   console.log(id);
  //   // let re = data.pop( e => e.idEstudiante === id)
  //   //   setCurrent(re);
  // };

  useEffect(() => {
    if (data && data.length > 0) {
      const onlyKeys = Object.keys(data[0]) || [];
      const result = onlyKeys.filter((e) => !excludeVar.includes(e));
      setThead(result);
    }
  }, [data]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {thead.map((e, k) => {
              let name = e;
              if (e === "idEstudiante") name = "legajo";
              return <th key={k}>{name}</th>;
            })}
            <th>Operacion</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((e, k) => (
              <tr key={k}>
                {Object.keys(e).map((el, kl) => {
                  if (excludeVar.includes(el)) return;
                  return <td key={kl}>{e[el]}</td>;
                })}
                <td className="option-buttons">
                  <Button
                    variant="success"
                    onClick={() => editarEstudiante(e.idEstudiante)}
                  >
                    <IconEdit />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => eliminarEstudiante(e.idEstudiante)}
                  >
                    <IconDelete />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalEditar modal={modal} toggle={toggle} estudiante={current} />
    </>
  );
};
