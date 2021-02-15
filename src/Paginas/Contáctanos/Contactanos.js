import React from "react";
import { Ubicacion } from "./Ubicacion";
import { Encuentranos } from "./Encuentranos";

function Contactanos() {
  return (
    <div className="contactanos">
      <div className="imagen-fondo-contatanos">
        <img src="http://localhost:3000/img/contacto.jpg" alt="" />
      </div>
      <Ubicacion />
      <Encuentranos />
    </div>
  );
}
export { Contactanos };
