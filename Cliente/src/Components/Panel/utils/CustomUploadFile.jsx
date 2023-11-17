import React from "react";
import { Form } from "react-bootstrap";

import s from "./s.module.css";
import { uploadFile } from "../../../Helpers/relaciones";
import { formatText } from "../../../Helpers/utils";

export const CustomUploadFile = ({ name, value = "", onChange }) => {
  const imageUrl = `${process.env.REACT_APP_BASE_URL_IMAGE}/${value}`;
  const handleChange = async (e) => {
    e.preventDefault();
    let selectedFile = e.target.files[0];
    const result = await uploadFile(selectedFile);
    if (result) {
      let formInput = {
        target: {
          name: "foto",
          value: formatText(selectedFile.name),
        },
      };
      onChange(formInput);
    }
  };
  return (
    <Form.Group className="mb-3" controlId={`input-${name}`}>
      <Form.Label className={s.custom_upload}>
        <span>Foto</span>
        {value.includes(".") && (
          <img width={150} height={150} src={imageUrl} alt="" />
        )}
      </Form.Label>
      <Form.Control type="file" name={name} onChange={handleChange} required />
    </Form.Group>
  );
};
