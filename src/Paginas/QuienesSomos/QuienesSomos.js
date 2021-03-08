import React from "react";
import { Historia } from "./Index";
import { Imagen } from "../Index";
import quienessomos from "../../img/quienes-somos.jpg";
function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <Imagen url={quienessomos} />
      <Historia />
    </div>
  );
}
export { QuienesSomos };
