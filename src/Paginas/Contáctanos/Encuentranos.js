import React from "react";
import { Formulario } from "./Forumulario";
import { Imagen } from "../Index";
import call_center from "../../img/call-center.png";
function Encuentranos() {
  return (
    <div className="encuentranos">
      <div>
        <h1>enviarnos un mensjae</h1>
      </div>
      <div className="formulario">
        <Imagen url={call_center} cssClass={"imagen-formulario"} />
        <Formulario />
      </div>
    </div>
  );
}

export { Encuentranos };
