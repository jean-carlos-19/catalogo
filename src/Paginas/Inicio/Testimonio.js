import React from "react";
import { v4 } from "uuid";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTestimonio } from "../../Hooks/useTestimonio";
function Testimonio() {
  const [imagenes] = useTestimonio();
  return (
    <div className="testimonio">
      <div className="titulo">
        <h3>testimonio de cliente</h3>
      </div>
      <div className="imagenes">
        {imagenes.map((elemento) => {
          return (
            <div className="persona" key={v4()}>
              <figure>
                <img src={elemento} key={v4()} alt="" />
              </figure>

              <h3 key={v4()}>jean Carlos</h3>
              <p key={v4()}>
                Realizamos nuestra primera compra y nos asesoraron en los
                artículos, en el tema de envíos son puntuales y los productos
                llegan bien embalados y en excelentes condiciones.
              </p>
              <div className="redes-sociales">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
export { Testimonio };
