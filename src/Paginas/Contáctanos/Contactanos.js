import React from "react";
import { Ubicacion } from "./Ubicacion";
import { Encuentranos } from "./Encuentranos";
import { Imagen } from "../Index";
import contacto from "../../img/contacto.jpg";
function Contactanos() {
  return (
    <div className="contactanos">
      <Imagen url={contacto} cssClass="imagen-fondo-contatanos" />
      <Ubicacion />
      <Encuentranos />
    </div>
  );
}
export { Contactanos };
