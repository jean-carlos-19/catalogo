import React from "react";
import { Logo, Lista } from "./Index";
import { useEncabezado } from "../Hooks/Index";
function Encabezado({
  paginas = [],
  PaginaActual = {},
  cambiaPagina = (f) => f,
}) {
  const [nuevaclase, apareceMenu] = useEncabezado(true);

  return (
    <header className="encabezado">
      <Logo apareceMenu={apareceMenu} />
      <Lista
        nuevaclase={nuevaclase}
        paginas={paginas}
        PaginaActual={PaginaActual}
        cambiaPagina={cambiaPagina}
      />
    </header>
  );
}

export { Encabezado };
