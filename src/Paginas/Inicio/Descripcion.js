import React from "react";
import PropTypes from "prop-types";
function Descripcion({ datos = [] }) {
  return (
    <div className="descripcion">
      {datos.map((elemento, indice) => (
        <div key={indice}>
          {elemento.porcentaje} {elemento.titulo} {elemento.parrafo}
        </div>
      ))}
    </div>
  );
}
Descripcion.propTypes = {
  datos: PropTypes.array.isRequired
};
export { Descripcion };
