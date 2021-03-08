import React from "react";
import { useRecomendacion } from "../../Hooks/useRecomendacion";
import { Imagen, Titulo, Parrafo } from "../Index";
import { RedesSociales } from "./Index";
import PropTypes from "prop-types";

function Recomendacion({ imagenes = [] }) {
  const [redesSociales] = useRecomendacion();
  return (
    <div className="imagenes">
      {imagenes.map((elemento, indice) => {
        return (
          <div className="persona" key={indice}>
            <Imagen url={elemento} />
            <Titulo nombre="jean Carlos" />
            <Parrafo
              parrafo=" Realizamos nuestra primera compra y nos asesoraron en los artículos, en el tema de envíos son
              puntuales y los productos llegan bien embalados y en excelentes condiciones."
            />
            <RedesSociales redesSociales={redesSociales} />
          </div>
        );
      })}
    </div>
  );
}

Recomendacion.propTypes = {
  imagenes: PropTypes.array.isRequired
};

export { Recomendacion };
