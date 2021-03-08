import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function useEncabezado(estado = true, paginas = [], cambiaPagina = (f) => f) {
  const [nuevaclase, establecerNuevaclase] = useState(estado);
  const [ubicacion, establecerUbicacion] = useState(undefined);
  const [pagina, establecerPagina] = useState("");
  const [error404] = useState(false);
  const location = useLocation();

  useEffect(() => {
    establecerUbicacion(true);
    if (pagina !== "") {
      cambiaPagina(pagina);
    }
  }, [location.pathname, pagina]);

  paginas.forEach((elemento) => {
    if (elemento.url === location.pathname && ubicacion) {
      establecerUbicacion(false);
      establecerPagina(elemento.pagina);
    }
  });

  const apareceMenu = () => {
    establecerNuevaclase(!nuevaclase);
  };

  return [nuevaclase, apareceMenu, error404];
}
export { useEncabezado };
