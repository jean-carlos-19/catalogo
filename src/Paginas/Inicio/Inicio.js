import React from "react";
import { Encontraras, ProductosDestacados, Ofrece, Testimonio } from "./Index";
function Inicio() {
  return (
    <section className="inicio">
      <figure className="imagen-fondo">
        <img src="http://localhost:3000/img/fondo.jpg" alt="" />
      </figure>
      <Encontraras />
      <ProductosDestacados />
      <Ofrece />
      <Testimonio />
    </section>
  );
}

export { Inicio };
