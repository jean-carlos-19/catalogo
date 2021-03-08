import React from "react";
import { useLista } from "../Hooks/Index";
import { Item } from "./Index";
import PropTypes from "prop-types";
function Lista({ nuevaclase = true, paginas = [], PaginaActual = {}, cambiaPagina = (f) => f }) {
  const [classCss] = useLista(nuevaclase);
  return (
    <nav className={classCss}>
      <ul className="listado">
        {paginas.map((elemento, posicion) => {
          if (elemento.pagina === PaginaActual.pagina) {
            return (
              <Item
                key={posicion}
                url={elemento.url}
                classPagina={PaginaActual.classPagina}
                pagina={elemento.pagina}
                cambiaPagina={cambiaPagina}
              />
            );
          } else {
            return <Item key={posicion} url={elemento.url} pagina={elemento.pagina} cambiaPagina={cambiaPagina} />;
          }
        })}
      </ul>
    </nav>
  );
}
Lista.propTypes = {
  nuevaclase: PropTypes.bool,
  paginas: PropTypes.array.isRequired,
  PaginaActual: PropTypes.object.isRequired
};
export { Lista };
