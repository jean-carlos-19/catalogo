import React from "react";
import { useLogo } from "../Hooks/Index";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
function Logo({ apareceMenu = (f) => f }) {
  const [menu, click] = useLogo(true, apareceMenu);

  return (
    <div className="logo">
      <Link
        className="icono"
        title="bienbenido"
        to="/"
        children={<img src="http://localhost:3000/img/Logo.png" alt="" />}
      />
      <Link
        className="nombre-logo"
        title="bienbenido"
        to="/"
        children={<h1> nilsa manualidades </h1>}
      />
      <button className="menu" title="menu" onClick={() => click()}>
        <span> {menu ? <FaAlignJustify /> : <FaWindowClose />} </span>
      </button>
    </div>
  );
}
export { Logo };
