import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  BsFillPenFill as IconEdit,
  BsFillTrashFill as IconDelete,
} from "react-icons/bs";
import { useModal } from "../../../hooks/useModal";
import { EditarMateria } from "./EditarMateria";

export const TablaMateria = ({ crud, data = [], toFinalAction }) => {
  const [modal, open, close] = useModal(false); // editar
  const [current, setCurrent] = useState({});

  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);

  const excludeVar = ["activo"];

  const handleEdit = async (id) => {
    let re = data.find((e) => e.idMateria === id);
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
      const theads = onlyKeys.filter((e) => !excludeVar.includes(e));
      setThead(theads);
      setTbody(data);
    }
  }, [data]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {thead.map((e, k) => {
              let name = e;
              if (e === "idMateria") name = "Cod";
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
                    onClick={() => handleEdit(e.idMateria)}
                  >
                    <IconEdit />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(e.idMateria)}
                  >
                    <IconDelete />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <EditarMateria
        crud={crud}
        modal={modal}
        close={close}
        item={current}
        finalAction={() => toFinalAction()}
      />
    </>
  );
};
