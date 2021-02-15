import React from "react";
import { FcIdea } from "react-icons/fc";
import { FaTrophy } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";

function Encontraras() {
  return (
    <section className="encontraras">
      <div className="puntos">
        <span>
          <FcIdea />
        </span>

        <h3>creatividad</h3>
      </div>
      <div className="puntos">
        <span>
          <MdAccessibility />
        </span>

        <h3>motrocidad</h3>
      </div>
      <div className="puntos">
        <span>
          <FaTrophy />
        </span>
        <h3>aprendizaje</h3>
      </div>
    </section>
  );
}

export { Encontraras };
