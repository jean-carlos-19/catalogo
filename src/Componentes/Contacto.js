import React from "react";
import { Link } from "react-router-dom";
function Contacto({
  paginas = [],
  PaginaActual = {},
  cambiaPagina = (f) => f,
}) {
  return (
    <section className="contacto">
      <div>
        <h3>Nuestro objetivo Principal es brindarte un servicio de Calidad.</h3>
        <p>
          Nos enfocamos en ser un aporte de valor con nuestros productos y
          brindarte asesoramiento .
        </p>
      </div>
      <div>
        <figure>
          <img src="http://localhost:3000/img/logo-footer.png" alt="" />
        </figure>
        <h3>Nilsa Manualidades Escolares</h3>
      </div>
      <div>
        <h3>Accesos Rapidos</h3>
        <ul>
          {paginas.map((elemento) => {
            if (elemento.pagina === PaginaActual.pagina) {
              return (
                <li>
                  <Link
                    className={PaginaActual.classPagina}
                    to={elemento.url}
                    children={elemento.pagina}
                    onClick={() => {
                      cambiaPagina(elemento.pagina);
                    }}
                  />
                </li>
              );
            } else {
              return (
                <li>
                  <Link
                    to={elemento.url}
                    children={elemento.pagina}
                    onClick={() => {
                      cambiaPagina(elemento.pagina);
                    }}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
export { Contacto };
