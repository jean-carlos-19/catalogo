import { useState } from "react";
function useEncabezado(estado = true) {
  const [nuevaclase, establecerNuevaclase] = useState(estado);
  const apareceMenu = () => {
    establecerNuevaclase(!nuevaclase);
  };
  return [nuevaclase, apareceMenu];
}
export { useEncabezado };
