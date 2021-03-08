import React from "react";
import { Informacion, Imagen, AccesoRapido } from "./Index";
import PropTypes from "prop-types";
function Contacto({ paginas = [], PaginaActual = {}, cambiaPagina = (f) => f }) {
  return (
    <section className="contacto">
      <Informacion />
      <Imagen />
      <AccesoRapido paginas={paginas} PaginaActual={PaginaActual} cambiaPagina={cambiaPagina} />
    </section>
  );
}
Contacto.propTypes = {
  paginas: PropTypes.array.isRequired,
  cambiaPagina: PropTypes.func.isRequired,
  PaginaActual: PropTypes.object.isRequired
};
export { Contacto };
