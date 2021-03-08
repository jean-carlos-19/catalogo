import React from "react";
import { useEncontraras } from "../../Hooks/useEncontraras";

function Encontraras() {
  const [redesSociales] = useEncontraras();

  return (
    <section className="encontraras">
      {redesSociales.map((elemento, indice) => {
        return (
          <div className="puntos" key={indice}>
            <span>{elemento.elemento}</span>
            <h3> {elemento.nombre} </h3>
          </div>
        );
      })}
    </section>
  );
}

export { Encontraras };
