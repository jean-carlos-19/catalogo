import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useEncabezado } from '../hooks/EncabezadoHooks'
import { Logo } from "./Logo";
import { Lista } from "./Lista";
import { Rutas } from "./Rutas";
import { Contacto } from './Contacto';
import { Footer } from './Footer';

function Encabezado() {

  const [PaginaActual, paginas, cambiaPagina, subMenu] = useEncabezado();

  return (
    <Router>
      <div className="contenedor">
        <div className="encabezado">
          <Logo />
          <Lista paginas={paginas} PaginaActual={PaginaActual} cambiaPagina={cambiaPagina} subMenu={subMenu} />
        </div>
        <Rutas />
        <Contacto />
        <Footer />
      </div>
    </Router>
  );
}

export { Encabezado };
