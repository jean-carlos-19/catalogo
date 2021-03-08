import React from "react";
import { useTestimonio } from "../../Hooks/useTestimonio";
import { Recomendacion } from "./Index";
import { Titulo } from "../Index";
function Testimonio() {
  const [imagenes] = useTestimonio();
  return (
    <div className="testimonio">
      <Titulo nombre="testimonio de cliente" />
      <Recomendacion imagenes={imagenes} />
    </div>
  );
}
export { Testimonio };
