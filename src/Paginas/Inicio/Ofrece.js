import React from "react";
import { useOfrece } from "../../Hooks/Index";
function Ofrece() {
  const [datos] = useOfrece();
  return (
    <section className="ofrece">
      <div className="titulo">
        <h3>Nilsa Manualidades Ofrece:</h3>
      </div>
      <div className="descripcion">
        {datos.map((elemento) => {
          return (
            <div>
              {elemento.porcentaje} {elemento.titulo} {elemento.parrafo}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { Ofrece };
