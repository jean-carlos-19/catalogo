import React from "react";
import PropTypes from "prop-types";
function Imagen({ url = "", cssClass = "", descripcion = "" }) {
  return (
    <figure className={cssClass}>
      <img src={url} alt={descripcion} />
    </figure>
  );
}
Imagen.propTypes = {
  url: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  descripcion: PropTypes.string
};
export { Imagen };
