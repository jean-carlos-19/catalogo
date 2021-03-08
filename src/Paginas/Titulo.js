import React from "react";
import PropTypes from "prop-types";
function Titulo({ nombre = "" }) {
  return (
    <div className="titulo">
      <h3> {nombre} </h3>
    </div>
  );
}
Titulo.propTypes = {
  nombre: PropTypes.string.isRequired
};
export { Titulo };
