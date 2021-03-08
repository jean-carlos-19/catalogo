import React from "react";
import { Link } from "react-router-dom";

function Publicidad() {
  return (
    <div className="publicidad">
      <h3> Interesado? Cotiza con Nosotros, qué Esperas! </h3>
      <p>Te asesoramos en tus pedidos, nuestro objetivo es brindarte una atención que cumpla con todas sus expectativas.</p>
      <Link
        to="/contactanos#formulario"
        onClick={() => {
          window.scroll({ top: window.innerHeight + 200 });
        }}
      >
        <button>contactànos</button>
      </Link>
    </div>
  );
}

export { Publicidad };
