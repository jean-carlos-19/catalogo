import React, { useState } from "react";
import { v4 } from "uuid";

function Logo({}) {
  const [imagenes, setImagenes] = useState([
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
    `http://localhost:3000/img/BASTIDORES-PLASTICOS-EN-DIFERENTES-TAMANOS.jpg`,
  ]);

  return imagenes.map((elemento) => {
    return (
      <figure>
        <img src={elemento} key={v4()} />
      </figure>
    );
  });
}
export { Logo };
