import React from "react";
import { Imagen } from "../Index";
import fondo from "../../img/fondo.jpg";

function Carrusel() {
  return (
    <section className="carrusel">
      <div className="deslizador">
        <input type="radio" name="radio" id="rd-1" />
        <input type="radio" name="radio" id="rd-2" />
        <input type="radio" name="radio" id="rd-3" />
        <input type="radio" name="radio" id="rd-4" />

        <Imagen url={fondo} cssClass="imagen-fondo primero" descripcion="estudiantes en un laboratorio de ciencias" />
        <Imagen url={fondo} cssClass="imagen-fondo" descripcion="estudiantes en un laboratorio de ciencias" />
        <Imagen url={fondo} cssClass="imagen-fondo" descripcion="estudiantes en un laboratorio de ciencias" />
        <Imagen url={fondo} cssClass="imagen-fondo" descripcion="estudiantes en un laboratorio de ciencias" />

        <div className="navegacion-automatica">
          <div className="auto-btn-1"></div>
          <div className="auto-btn-2"></div>
          <div className="auto-btn-3"></div>
          <div className="auto-btn-4"></div>
        </div>

        <div className="navegacion-manual">
          <div className="controladores">
            <label htmlFor="rd-1" className="rd-1"></label>
            <label htmlFor="rd-2" className="rd-2"></label>
            <label htmlFor="rd-3" className="rd-3"></label>
            <label htmlFor="rd-4" className="rd-4"></label>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Carrusel };
