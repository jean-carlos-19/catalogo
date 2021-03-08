import React from "react";
import { Logo, Lista } from "./Index";
import { useEncabezado } from "../Hooks/Index";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function Encabezado({ paginas = [], PaginaActual = {}, cambiaPagina = (f) => f }) {
  const [nuevaclase, apareceMenu, error404] = useEncabezado(true, paginas, cambiaPagina);

  if (error404) {
    return <Redirect to="/pagina-no-encontrada" />;
  }
  return (
    <header className="encabezado">
      <Logo apareceMenu={apareceMenu} />
      <Lista nuevaclase={nuevaclase} paginas={paginas} PaginaActual={PaginaActual} cambiaPagina={cambiaPagina} />
    </header>
  );
}

Encabezado.propTypes = {
  paginas: PropTypes.array.isRequired,
  PaginaActual: PropTypes.object.isRequired,
  cambiaPagina: PropTypes.func.isRequired
};
export { Encabezado };
