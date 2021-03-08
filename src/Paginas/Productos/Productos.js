import React from "react";
import { Navegacion, Rutas } from "./Index";
import { useProducto } from "../../Hooks/Index";
import { Titulo } from "../Index";
import PropTypes from "prop-types";

function Productos({ paginas = [] }) {
  const [categoria, agregarCategoria, regresar] = useProducto();

  return (
    <section className="producto">
      <Titulo nombre={"productos"} />
      <Navegacion categoria={categoria} regresar={regresar} agregarCategoria={agregarCategoria} paginas={paginas} />
      <Rutas agregarCategoria={agregarCategoria} />
    </section>
  );
}
Productos.propTypes = {
  paginas: PropTypes.array.isRequired
};
export { Productos };
