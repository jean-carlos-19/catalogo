import React from "react";
import { useLocation } from "react-router-dom";
import { Imagen, Titulo } from "../Index";
function PaginaNoEncontrada() {
  const location = useLocation();

  return (
    <section className="error404">
      <Titulo nombre={`pagina no encontrada ${location.pathname}`} />
      <Imagen url="http://localhost:3000/img/404.svg" cssClass="" />
    </section>
  );
}

export { PaginaNoEncontrada };
