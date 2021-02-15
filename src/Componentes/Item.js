import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
function Item({ url = "", pagina = "", classPagina, cambiaPagina = (f) => f }) {
  return (
    <li key={v4()}>
      <Link
        to={url}
        onClick={(e) => cambiaPagina(pagina)}
        className={classPagina}
        children={pagina}
      />
    </li>
  );
}

export { Item };
