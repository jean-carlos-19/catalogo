import React from "react";
import { Encontraras } from './Encontraras';
import { ProductosDestacados } from './ProductosDestacados';
import { Ofrece } from './Ofrece';
import { Testimonio } from './Testimonio';

function Inicio() {
  return (
    <div className="inicio">

      <div className="imagen-fondo"></div>
      <Encontraras />
      <ProductosDestacados />
      <Ofrece />
      <Testimonio />


    </div>
  );
}

export { Inicio };
