import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">

      <Link to="/" children={ <img src="http://localhost:3000/Logo.png" alt="" />} />

      <Link className="nombre-logo" to="/" children={"nilsa manualidades"} />
    
    </div>
  );
}
export { Logo };
