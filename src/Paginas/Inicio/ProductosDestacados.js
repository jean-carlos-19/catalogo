import React from "react";
import { Titulo, Imagenes } from "../Index";
import { CategoriaProductos } from "./Index";
function ProductosDestacados() {
  return (
    <section className="productos-destacados">
      <Titulo nombre="productos destacados" />
      <Imagenes />
      <CategoriaProductos />
    </section>
  );
}

export { ProductosDestacados };
