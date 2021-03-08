import React, { useState } from "react";
import { FcIdea } from "react-icons/fc";
import { FaTrophy } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";

function useEncontraras() {
  const [redesSociales] = useState([
    { elemento: <FcIdea />, nombre: "creatividad" },
    { elemento: <MdAccessibility />, nombre: "motrocidad" },
    { elemento: <FaTrophy />, nombre: "aprendizaje" }
  ]);

  return [redesSociales];
}
export { useEncontraras };
