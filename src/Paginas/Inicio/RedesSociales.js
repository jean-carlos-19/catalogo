import React from "react";

function RedesSociales({ redesSociales = [] }) {
  return (
    <div className="redes-sociales">
      {redesSociales.map((elemento, indice) => (
        <p key={indice}>{elemento} </p>
      ))}
    </div>
  );
}

export { RedesSociales };
