import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useContenedor } from "../Hooks/Index";
import { Rutas, Contacto, Footer, Encabezado } from "../Componentes/Index";

function Contenedor() {
  const [PaginaActual, paginas, cambiaPagina] = useContenedor();

  return (
    <Router>
      <article className="contenedor">
        <Encabezado
          paginas={paginas}
          PaginaActual={PaginaActual}
          cambiaPagina={cambiaPagina}
        />
        <Rutas />
        <Contacto
          paginas={paginas}
          cambiaPagina={cambiaPagina}
          PaginaActual={PaginaActual}
        />
        <Footer />
      </article>
    </Router>
  );
}

export { Contenedor };
