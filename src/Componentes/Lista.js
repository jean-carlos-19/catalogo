import React from "react";
import { useLista } from "../Hooks/Index";
import { Item } from "./Index";

function Lista({
  nuevaclase = true,
  paginas = [],
  PaginaActual = {},
  cambiaPagina = (f) => f,
}) {
  const [classCss] = useLista(nuevaclase);
  return (
    <nav className={classCss}>
      <ul className="listado">
        {paginas.map((elemento) => {
          if (elemento.pagina === PaginaActual.pagina) {
            return (
              <Item
                url={elemento.url}
                classPagina={PaginaActual.classPagina}
                pagina={elemento.pagina}
                cambiaPagina={cambiaPagina}
              />
            );
          } else {
            return (
              <Item
                url={elemento.url}
                pagina={elemento.pagina}
                cambiaPagina={cambiaPagina}
              />
            );
          }
        })}
      </ul>
    </nav>
  );
}

export { Lista };
