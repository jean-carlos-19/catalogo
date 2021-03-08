import React from "react";
import { Link } from "react-router-dom";
function CategoriaProductos() {
  const scroll = () => {
    window.scroll({ top: 0 });
  };
  return (
    <div className="mas-productos">
      <Link to="productos" onClick={scroll} children={<button>màs productos</button>} />
    </div>
  );
}

export { CategoriaProductos };
