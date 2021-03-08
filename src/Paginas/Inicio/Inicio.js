import React from "react";
import { Encontraras, ProductosDestacados, Ofrece, Testimonio, Carrusel } from "./Index";

function Inicio() {
  return (
    <section className="inicio">
      <Carrusel />
      <Encontraras />
      <ProductosDestacados />
      <Ofrece />
      <Testimonio />
    </section>
  );
}

export { Inicio };
