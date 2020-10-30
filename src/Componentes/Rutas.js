import React from "react";
import {Switch, Route } from "react-router-dom";
import { Inicio } from "../Paginas/Inicio/Inicio";
import { Contactanos } from "../Paginas/Contáctanos/Contactanos";
import { Productos } from "../Paginas/Productos/Productos";
import { QuienesSomos } from "../Paginas/QuienesSomos/QuienesSomos";

function Rutas() {
  return (
    <Switch>

      <Route exact path="/" children={<Inicio />} />

      <Route path="/productos" children={<Productos />} />

      <Route path="/quienes-somos" children={<QuienesSomos />} />

      <Route path="/contactanos" children={<Contactanos />} />
      
    </Switch>
  );
}
export { Rutas };
