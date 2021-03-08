import React, { useState } from "react";
import { v4 } from "uuid";
import { Imagen } from "./Index";
import Bastidores from "../img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg";
function Imagenes() {
  const [imagenes] = useState([
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores,
    Bastidores
  ]);

  return (
    <div className="img-productos">
      {imagenes.map((elemento) => (
        <Imagen url={elemento} key={v4()} />
      ))}
    </div>
  );
}
export { Imagenes };
