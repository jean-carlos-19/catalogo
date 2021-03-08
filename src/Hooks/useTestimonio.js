import { useState } from "react";
import cliente from "../img/cliente.png";
function useTestimonio() {
  const [imagenes] = useState([cliente, cliente, cliente]);
  return [imagenes];
}
export { useTestimonio };
