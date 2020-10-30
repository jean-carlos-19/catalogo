import React from "react";
import { Link } from "react-router-dom";

function Lista({ paginas = [], PaginaActual = {}, cambiaPagina = (f) => f, subMenu = {} }) {
  return (

    <nav className="lista">

      <ul className="contenedor-item">
  
        {paginas.map((elemento) => {

          if (elemento.pagina === PaginaActual.pagina && PaginaActual.pagina !== "productos") {
            return <Menu url={elemento.url} classPagina={PaginaActual.classPagina} pagina={elemento.pagina} cambiaPagina={cambiaPagina} />
          } else {
            if (elemento.pagina === "productos") {
              return (
                <>
                  <Menu url={elemento.url}  pagina={elemento.pagina} cambiaPagina={cambiaPagina} />

                  <SubMenu subMenu={elemento.subMenu} ClassSubMenu={subMenu} />
                </>
              )
            }
            return <Menu url={elemento.url}  pagina={elemento.pagina} cambiaPagina={cambiaPagina} />
          }
        })}
      </ul>

    </nav>
  );
}
function Menu({ url = "", pagina = "", classPagina, cambiaPagina = (f) => f }) {

  return (

    <li>
      <Link to={url} onClick={(e) => cambiaPagina(pagina)} className={classPagina} children={pagina} />
    </li>

  );
}
function SubMenu({ subMenu = [], ClassSubMenu = {} }) {

  return subMenu.length > 0 ? (

    <div className={ClassSubMenu.classSubMenu}>

      <ul>
        {
          subMenu.map((elemento) => {
            return (
              <li>
                <Link children={elemento} />
              </li>
            )
          })

        }
      </ul>
      <>

      </>
    </div>

  ) : (null);
}
export { Lista };
