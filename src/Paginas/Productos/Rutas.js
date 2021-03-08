import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Bordados,
  EscolaresJardin,
  FerreteriaEscolar,
  Manualidades,
  Maqueteria,
  MochilasBolsas,
  Plumavit,
  QuimicaLaboratorio,
  Titeres,
  Varios,
  Categorias
} from "./Index";
import { PaginaNoEncontrada } from "../../Paginas/Index";
import PropTypes from "prop-types";
function Rutas({ agregarCategoria = (f) => f }) {
  return (
    <Switch>
      <Route exact path="/productos" children={<Categorias agregarCategoria={agregarCategoria} />} />
      <Route exact path="/productos/bordados" children={<Bordados />} />
      <Route exact path="/productos/escolares-jardin" children={<EscolaresJardin />} />
      <Route exact path="/productos/ferreteria-escolar" children={<FerreteriaEscolar />} />
      <Route exact path="/productos/manualidades" children={<Manualidades />} />
      <Route exact path="/productos/maqueteria" children={<Maqueteria />} />
      <Route exact path="/productos/mochilas-bolsas" children={<MochilasBolsas />} />
      <Route exact path="/productos/plumavit" children={<Plumavit />} />
      <Route exact path="/productos/quimica-laboratorio" children={<QuimicaLaboratorio />} />
      <Route exact path="/productos/titeres" children={<Titeres />} />
      <Route exact path="/productos/varios" children={<Varios />} />
      <Route component={PaginaNoEncontrada} />
    </Switch>
  );
}
Rutas.propTypes = {
  agregarCategoria: PropTypes.func.isRequired
};
export { Rutas };
