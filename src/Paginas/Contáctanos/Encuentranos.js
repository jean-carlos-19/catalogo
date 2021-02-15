import React from "react";
import { Formulario } from "./Forumulario";
import { ImagenFormulario } from "./ImagenFormulario";

function Encuentranos() {
  return (
    <div className="encuentranos">
      <div>
        <h1>enviarnos un mensjae</h1>
      </div>
      <div className="formulario">
        <ImagenFormulario />
        <Formulario />
      </div>
    </div>
  );
}

export { Encuentranos };
