import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Inicio, Contactanos, Productos, QuienesSomos, PaginaNoEncontrada } from "../Paginas/Index";
import { Contenedor } from "../Contenedor/Contenedor";
import { useContenedor } from "../Hooks/Index";
function Rutas() {
  const [PaginaActual, paginas, cambiaPagina] = useContenedor();
  const configuracion = {
    PaginaActual,
    paginas,
    cambiaPagina
  };
  return (
    <Router>
      <Switch>
        <Route exact strict path="/" children={<Contenedor configuraciones={configuracion} componente={<Inicio />} />} />
        <Route
          path="/productos"
          children={<Contenedor configuraciones={configuracion} componente={<Productos paginas={paginas} />} />}
        />
        <Route
          strict
          sensitive
          exact
          path="/quienes-somos"
          children={<Contenedor configuraciones={configuracion} componente={<QuienesSomos />} />}
        />
        <Route
          exact
          strict
          sensitive
          path="/contactanos"
          children={<Contenedor configuraciones={configuracion} componente={<Contactanos />} />}
        />
        <Route component={PaginaNoEncontrada} />
      </Switch>
    </Router>
  );
}
export { Rutas };
