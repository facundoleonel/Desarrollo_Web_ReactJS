import React from "react";
import { Form } from "react-bootstrap";

import s from "./s.module.css";

export const CustomUploadFile = ({
  name,
  value = "",
  placeholder,
  onChange,
}) => {
  const imageUrl = `${process.env.REACT_APP_BASE_URL_IMAGE}/${value}`;
  return (
    <section className={s.custom_upload}>
      {value ? <img src={imageUrl} alt="" /> : ""}
      <Form.Group className="mb-3" controlId={`input-${name}`}>
        <Form.Control type="file" name={name} onChange={onChange} required />
        <i>{placeholder}</i>
      </Form.Group>
    </section>
  );
};
