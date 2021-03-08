import React from "react";
import { useQuienesSomos } from "../../Hooks/Index";

function Relato() {
  const [parrafos] = useQuienesSomos();
  return (
    <div className="relato">
      <h3>nuestra empresa fue creada en el año 19993</h3>
      <div className="parrafos">
        {parrafos.map((elemento, indice) => (
          <div key={indice}>{elemento.parrafo}</div>
        ))}
      </div>
    </div>
  );
}

export { Relato };
