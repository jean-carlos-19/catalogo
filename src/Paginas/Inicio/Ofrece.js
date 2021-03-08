import React from "react";
import { useOfrece } from "../../Hooks/Index";
import { Descripcion } from "./Index";
import { Titulo } from "../Index";
function Ofrece() {
  const [datos] = useOfrece();
  return (
    <section className="ofrece">
      <Titulo nombre="Nilsa Manualidades Ofrece:" />
      <Descripcion datos={datos} />
    </section>
  );
}

export { Ofrece };
