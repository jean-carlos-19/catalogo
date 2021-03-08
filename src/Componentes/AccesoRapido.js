import React from "react";
import { Lista } from "./Index";

function AccesoRapido({ paginas = [], PaginaActual = {}, cambiaPagina = (f) => f }) {
  return (
    <div>
      <h3>Accesos Rapidos</h3>
      <Lista paginas={paginas} PaginaActual={PaginaActual} cambiaPagina={cambiaPagina} />
    </div>
  );
}

export { AccesoRapido };
