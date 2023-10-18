import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  BsFillPenFill as IconEdit,
  BsFillTrashFill as IconDelete,
} from "react-icons/bs";
import { useModal } from "../../../hooks/useModal";
import { ModalEditar } from "./ModalEditar";

import Nacionalidad from "./../../../Assets/jsons/nacionalidad.json";

export const Tabla = ({ crud, data = [], toFinalAction }) => {
  const [modal, open, close] = useModal(false); // editar
  const [current, setCurrent] = useState({});

  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);

  const excludeVar = ["activo"];

  const handleEdit = async (id) => {
    let re = data.find((e) => e.idEstudiante === id);
    setCurrent(re);
    open();
  };

  const handleDelete = async (id) => {
    await crud.eliminar(id);
    close();
    toFinalAction();
  };

  useEffect(() => {
    if (data && data.length > 0) {
      // Setea las keys de el header de la tabla
      const onlyKeys = Object.keys(data[0]) || [];
      const result = onlyKeys.filter((e) => !excludeVar.includes(e));
      setThead(result);
      // Actualiza el visual de nacionalidad

      let tbodyAux = [];
      data.forEach((e) => {
        const nacionalidad = Nacionalidad.find(
          (n) => n.value === e.nacionalidad
        );
        let nacionalidadValue = nacionalidad ? nacionalidad.name : "";

        tbodyAux.push({
          ...e,
          ["nacionalidad"]: nacionalidadValue,
          ["fechaNacimiento"]: formatearFecha(e.fechaNacimiento),
        });
      });
      setTbody(tbodyAux);
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
          {tbody &&
            tbody.length > 0 &&
            tbody.map((e, k) => (
              <tr key={k}>
                {Object.keys(e).map((el, kl) => {
                  if (excludeVar.includes(el)) return;
                  return <td key={kl}>{e[el]}</td>;
                })}
                <td className="option-buttons">
                  <Button
                    variant="success"
                    onClick={() => handleEdit(e.idEstudiante)}
                  >
                    <IconEdit />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(e.idEstudiante)}
                  >
                    <IconDelete />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalEditar
        crud={crud}
        modal={modal}
        close={close}
        estudiante={current}
        finalAction={() => toFinalAction()}
      />
    </>
  );
};
