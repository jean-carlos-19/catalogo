import React from "react";
import logo_footer from "../../img/logo-footer.png";
import { Imagen } from "../Index";
function Titulo() {
  return (
    <div className="titulo">
      <div>
        <h1>nilsa manualidades</h1>
      </div>
      <Imagen url={logo_footer} />
    </div>
  );
}

export { Titulo };
