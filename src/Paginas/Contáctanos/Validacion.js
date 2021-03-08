import React from "react";
import { FaHandPaper } from "react-icons/fa";
const nombre = {
  required: {
    value: true,
    message: (
      <p>
        <FaHandPaper /> este campo es obligatorio.
      </p>
    )
  },
  maxLength: {
    value: 50,
    message: (
      <p>
        <FaHandPaper /> No más de 5 carácteres!.
      </p>
    )
  }
};
const correo = {
  required: {
    value: true,
    message: (
      <p>
        <FaHandPaper /> este campo es obligatorio.
      </p>
    )
  }
};
const detalle = {
  required: {
    value: true,
    message: (
      <p>
        <FaHandPaper /> este campo es obligatorio.
      </p>
    )
  },
  maxLength: {
    value: 255,
    message: (
      <p>
        <FaHandPaper /> No más de 5 carácteres!.
      </p>
    )
  },
  minLength: {
    value: 10,
    message: (
      <p>
        <FaHandPaper /> Mínimo 5 carácteres.
      </p>
    )
  }
};
const validacion = {
  nombre,
  correo,
  detalle
};
export { validacion };
