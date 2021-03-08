import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function useNavegacion(agregarCategoria = f => f) {
  const [estado, establecerEstado] = useState(true);
  const [ubicacion, establecerUbicacion] = useState({ url: "", path: "" });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === ubicacion.url) {
      agregarCategoria(ubicacion.url, ubicacion.path);
    }
    establecerEstado(true);
  }, [location.pathname]);
  return [estado, establecerEstado, establecerUbicacion];
}
export { useNavegacion };
