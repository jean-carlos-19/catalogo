import { useState, useEffect } from "react";
function useCategoria() {
  const items = [
    "articulos nuevos",
    "escolares-jardin",
    "ferreteria-escolar",
    "manualidades",
    "maqueterias",
    "mochilas y bolsas",
    "plumavit",
    "quimica-laboratorio",
    "titeres",
    "varios"
  ];
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    setCategoria(items);
  }, [items]);
  return [categoria];
}
export { useCategoria };
