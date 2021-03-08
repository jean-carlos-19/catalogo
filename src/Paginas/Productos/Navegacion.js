import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useNavegacion } from "../../Hooks/Index";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function Navegacion({ categoria = [], regresar = f => f, agregarCategoria = f => f, paginas = [] }) {
  const [estado, establecerEstado, establecerUbicacion] = useNavegacion(agregarCategoria);
  const location = useLocation();

  paginas.forEach(elemento => {
    if (elemento.pagina === "productos") {
      elemento.subMenu.forEach(datos => {
        if (datos.url === location.pathname && estado) {
          establecerUbicacion({ url: datos.url, path: datos.nombre });
          establecerEstado(false);
        }
      });
    }
  });

  return (
    <nav className="seccion">
      <ul>
        {categoria.map((elemento, posicion) => {
          if (posicion > 0) {
            return (
              <li key={posicion}>
                <FaChevronRight />
                <Link to={elemento.link} children={elemento.componente} onClick={() => regresar(elemento.link)} />
              </li>
            );
          } else {
            return (
              <li key={posicion}>
                <Link to={elemento.link} children={elemento.componente} onClick={() => regresar(elemento.link)} />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

Navegacion.propTypes = {
  categoria: PropTypes.array.isRequired,
  regresar: PropTypes.func.isRequired,
  agregarCategoria: PropTypes.func.isRequired,
  paginas: PropTypes.array.isRequired
};

export { Navegacion };
