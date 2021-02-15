import React from "react";
import { Logo } from "../Logo";

function ProductosDestacados() {
  return (
    <section className="productos-destacados">
      <div className="titulo">
        <h3>productos destacados</h3>
      </div>
      <div className="img-productos">
        <Logo />
      </div>
      <div className="mas-productos">
        <button>màs productos</button>
      </div>
    </section>
  );
}

export { ProductosDestacados };
