import React from "react";
import { Contacto, Footer, Encabezado } from "../Componentes/Index";
import PropTypes from "prop-types";

function Contenedor({ componente, configuraciones = {} }) {
  const { paginas, PaginaActual, cambiaPagina } = configuraciones;
  return (
    <article className="contenedor">
      <Encabezado paginas={paginas} PaginaActual={PaginaActual} cambiaPagina={cambiaPagina} />
      {componente}
      <Contacto paginas={paginas} cambiaPagina={cambiaPagina} PaginaActual={PaginaActual} />
      <Footer />
    </article>
  );
}
Contenedor.propTypes = {
  componente: PropTypes.element.isRequired,
  configuraciones: PropTypes.exact({
    paginas: PropTypes.array.isRequired,
    PaginaActual: PropTypes.object.isRequired,
    cambiaPagina: PropTypes.func.isRequired
  }).isRequired
};
export { Contenedor };
