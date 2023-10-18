import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  BsFillPenFill as IconEdit,
  BsFillTrashFill as IconDelete,
} from "react-icons/bs";
import { useModal } from "../../../hooks/useModal";
import { EditarPost } from "./EditarPost";

export const TablaPost = ({ data = [], toFinalAction, crudBlog }) => {
  const [modal, setModal, toggle] = useModal(false); // editar
  const [current, setCurrent] = useState({});

  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);

  const ACTIVO = "activo";

  const handleEdit = async (id) => {
    const toEdit = data.find((e) => e.idBlog === id);
    setCurrent(toEdit);
    setModal(true);
  };

  const handleDelete = async (id) => {
    await crudBlog.eliminar(id);
    toFinalAction();
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const onlyKeys = Object.keys(data[0]) || [];
      const result = onlyKeys.filter((e) => e !== ACTIVO);
      setThead(result);

      setTbody(data);
    }
  }, [data]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {thead.map((e, k) => (
              <th key={k}>{e === "idBlog" ? "id" : e}</th>
            ))}
            <th>Operacion</th>
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.length > 0 &&
            tbody.map((e, k) => (
              <tr key={k}>
                {Object.keys(e).map((el, kl) => {
                  return e !== ACTIVO ? <td key={kl}>{e[el]}</td> : "";
                })}
                <td className="option-buttons">
                  <Button
                    variant="success"
                    onClick={() => handleEdit(e.idBlog)}
                  >
                    <IconEdit />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(e.idBlog)}
                  >
                    <IconDelete />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <EditarPost
        modal={modal}
        toggle={toggle}
        post={current}
        crudBlog={crudBlog}
        finalAction={() => toFinalAction()}
      />
    </>
  );
};
