import React, { useState } from "react";

function useProducto() {
  const [categoria, establecerCategoria] = useState([{ link: "/productos", componente: <p>categoria</p> }]);

  const agregarCategoria = (link = "", texto = "") => {
    const items = categoria.filter((elemento) => elemento);

    if (items.length < 2) {
      items.push({ link: link, componente: <p> {texto} </p> });
      establecerCategoria(items);
    }
  };
  const regresar = (url = "/productos") => {
    if (url === "/productos") {
      establecerCategoria([{ link: "/productos", componente: <p>categoria</p> }]);
    }
  };
  return [categoria, agregarCategoria, regresar];
}

export { useProducto };
