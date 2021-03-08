import { useState } from "react";

const useContenedor = () => {
  const [PaginaActual, setPaginaActual] = useState({
    pagina: "inicio",
    classPagina: "foco"
  });

  const [paginas] = useState([
    { pagina: "inicio", url: "/", subMenu: [], classPagina: "foco" },
    {
      pagina: "productos",
      url: "/productos",
      subMenu: [
        { nombre: "bordados", url: "/productos/bordados" },
        { nombre: "escolares-jardin", url: "/productos/escolares-jardin" },
        { nombre: "ferreteria-escolar", url: "/productos/ferreteria-escolar" },
        { nombre: "manualidades", url: "/productos/manualidades" },
        { nombre: "maqueteria", url: "/productos/maqueteria" },
        { nombre: "mochilas-bolas", url: "/productos/mochilas-bola" },
        { nombre: "plumavit", url: "/productos/plumavit" },
        { nombre: "quimica-laboratorio", url: "/productos/quimica-laboratorio" },
        { nombre: "titeres", url: "/productos/titeres" },
        { nombre: "varios", url: "/productos/varios" }
      ],
      classPagina: ""
    },
    { pagina: "quienes-somos", url: "/quienes-somos", subMenu: [], classPagina: "" },
    { pagina: "contactanos", url: "/contactanos", subMenu: [], classPagina: "" }
  ]);

  const cambiaPagina = (paginaSeleccionada = "sin parametro") => {
    setPaginaActual({ pagina: paginaSeleccionada, classPagina: "foco" });
  };

  return [PaginaActual, paginas, cambiaPagina];
};
export { useContenedor };
