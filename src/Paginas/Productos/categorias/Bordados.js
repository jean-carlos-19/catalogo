import React, { useState } from "react";
import imagen from "../../../img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg";
function Bordados() {
  const [producto] = useState([imagen, imagen, imagen, imagen, imagen, imagen, imagen, imagen]);
  return (
    <section className="categoria-descripcion">
      {producto.map((elemento, indice) => {
        return (
          <figure key={indice}>
            <img src={elemento} alt="" />
            <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, maxime.</figcaption>
          </figure>
        );
      })}
    </section>
  );
}

export { Bordados };
