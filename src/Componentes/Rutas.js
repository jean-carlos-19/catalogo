import React from "react";
import { Switch, Route } from "react-router-dom";
import { Inicio, Contactanos, Productos, QuienesSomos } from "../Paginas/Index";

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
