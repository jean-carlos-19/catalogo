import { useState } from "react";

const useContenedor = () => {
  const [PaginaActual, setPaginaActual] = useState({
    pagina: "inicio",
    classPagina: "foco",
  });

  const [paginas] = useState([
    { pagina: "inicio", url: "/", subMenu: [], classPagina: "foco" },
    { pagina: "productos", url: "/productos", subMenu: [], classPagina: "" },
    {
      pagina: "quienes somos",
      url: "/quienes-somos",
      subMenu: [],
      classPagina: "",
    },
    {
      pagina: "contàctanos",
      url: "/contactanos",
      subMenu: [],
      classPagina: "",
    },
  ]);

  const cambiaPagina = (paginaSeleccionada = "sin parametro") => {
    setPaginaActual({ pagina: paginaSeleccionada, classPagina: "foco" });
  };

  return [PaginaActual, paginas, cambiaPagina];
};
export { useContenedor };
